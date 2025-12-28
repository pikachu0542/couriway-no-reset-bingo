import { useEffect, useState } from "react";
import { RandomRange } from "./util";
import BingoRow from "./BingoRow";
import type { BingoSquare } from "./types/BingoSquare";

const BASE_URL = import.meta.env.BASE_URL

function BingoCard() {
    const [nrsItems, setNrsItems] = useState<string[]>([]);
    const [card, setCard] = useState<BingoSquare[][]>([]);
    
    // INFO: As of right now, card sizes must be perfect squares
    const CARD_SIZE = 25;
    const NUM_ROWS = Math.sqrt(CARD_SIZE);
    const ROW_LEN = CARD_SIZE / NUM_ROWS;
    
    // Gets all the options for squares from JSON file
    useEffect(() => {
        fetch(`${BASE_URL}/data/nrs-bingo-items.json`)
        .then(res => res.json())
        .then(items => setNrsItems(items))
        .catch(console.error);
    }, []);
    
    const generateNewCard = () => {
        if (nrsItems.length < CARD_SIZE) return;

        const itemsCopy = [...nrsItems];
        const newCard: BingoSquare[][] = [];

        for (let row = 0; row < NUM_ROWS; row++) {
            const rowArr: BingoSquare[] = [];

            for (let col = 0; col < ROW_LEN; col++) {
                const index = RandomRange(0, itemsCopy.length - 1);
                rowArr.push({text: itemsCopy[index], marked: false });

                itemsCopy.splice(index, 1);
            }

            newCard.push(rowArr);
        }

    setCard(newCard);
  };

    // Create a bingo card with random items from the list of possible items
    useEffect(() => {
        if (nrsItems.length > 0) { generateNewCard(); }
    }, [nrsItems]);

    
    /**
     * Toggles the state of a square in a bingo card between marked and unmarked
     * @param row The row of the square to toggle
     * @param col The column of the square to toggle
     */
    const toggleSquare = (row: number, col: number) => {
        setCard(prev => 
            prev.map((r, rowIndex) =>
                r.map((square, colIndex) =>
                    rowIndex === row && colIndex === col ? { ...square, marked: !square.marked } : square
                )
            )
        );
    };

    /**
    * Resets all squares in the current card to the unmarked state
    */
    const resetCard = () => {
        setCard(prev =>
            prev.map(row =>
                row.map(square => ({...square, marked: false}))
            )
        );
    };

    return (
        <>
            <div className="flex justify-center mb-4 gap-5">
                <button
                    onClick={resetCard}
                    className="px-4 py-2 bg-red-500 text-white rounded"
                >
                    Reset Card
                </button>
                <button 
                    onClick={generateNewCard}
                    className="px-4 py-2 bg-green-500 text-black rounded"
                >
                    New Card
                </button>
            </div>
        
            <div className="flex justify-center">
                <div>
                    {card.map((row, rowIndex) => (
                        <BingoRow
                            key={rowIndex}
                            rowIndex={rowIndex}
                            rowContents={row}
                            onToggle={toggleSquare}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default BingoCard;

