import { useEffect, useState } from "react";
import BingoRow from "./BingoRow";
import type { BingoSquare } from "./types/BingoSquare";

const BASE_URL = import.meta.env.BASE_URL;

/**
 * A custom data type that to represent the data used by each square of the bingo card
 */
type ItemData = {
    name: string;
    desc?: string;
    isMarked?: boolean;
    runMarked?: number;
    row: number;
    col: number;
};

/**
 * Parse the JSON file with all comments removed
 * @param text The raw JSON contents to parse
 * @returns The parsed JSON object, with any comments from the source file removed
 */
function parseJSON(rawText: string) {
    // Regex to remove comments from the JSON before parsing
    let noComments = rawText.replace(/(^|\n)\s*\/\/.*(?=\n|$)/g, "\n");
    
    return JSON.parse(noComments);
}

/**
 * 
 * @param items Create a grid of BingoSquare objects using the items parsed from the JSON file
 * @param size The size of the grid (will always be a square). Defaults to 5
 * @returns A 2D array of BingoSquare objects to represent the bingo card.
 */
function buildGridFromItems(items: ItemData[], size = 5): BingoSquare[][] {
    let grid: BingoSquare[][] = Array.from({ length: size }, () =>
        Array.from({ length: size }, () => ({ text: "", marked: false }))
    );

    items.forEach((item) => {
        let row = Math.max(1, Math.min(size, item.row)) - 1;
        let col = Math.max(1, Math.min(size, item.col)) - 1;

        grid[row][col] = { 
            text: item.name, 
            marked: !!item.isMarked, 
            desc: item.desc ?? "", 
            runMarked: item.runMarked ?? null 
        };
    });

    return grid;
}

function ChallengeCard() {
    const [grid, setGrid] = useState<BingoSquare[][]>([]);

    useEffect(() => {
        async function load() {

            try {
                let res = await fetch(`${BASE_URL}/data/100k-bingo-items.jsonc`);
                let text = await res.text();

                let items: ItemData[] = parseJSON(text);
                let itemGrid = buildGridFromItems(items, 5);
                
                setGrid(itemGrid);
            }
            catch (e) { 
                console.error(e);
            }
        }

        load();
    }, []);

    return (
        <div>
            <div className="items-center text-center mb-4">
                <h1 className="text-4xl font-bold">100k Bingo Card</h1>
            </div>
            
            <div className="flex justify-center">
                <div>
                    {grid.map((row, rowIndex) => (<BingoRow key={rowIndex} rowIndex={rowIndex} rowContents={row} readOnly={true} />))}
                </div>
            </div>
        </div>
    );
}

export default ChallengeCard;
