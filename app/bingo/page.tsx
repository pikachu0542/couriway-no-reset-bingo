"use client"

import { RandomRange } from "@/util/util";
import goals from "../../public/data/nrs-bingo-items.json";
import BingoSquare from "@/components/BingoSquare";
import { useState } from "react";

const BOARD_SIZE: number = 5;

function randomizeBoard() {
    let board: string[][] = [];
    
    // Make a copy of the goals list. Want to be able to remove chosen goals from it to prevent duplicates, since other methods,
    // such as generating a number and checking if it was already chosen, can be very slow, or even theoretically could just loop infinitely
    let goalArr: string[] = [...goals];

    for (let i = 0; i < BOARD_SIZE; i++) {
        let row: string[] = [];
        
        for (let j = 0; j < BOARD_SIZE; j++) {
            let goalIndex: number = RandomRange(0, goalArr.length);

            row.push(goalArr[goalIndex]);
            goalArr.splice(goalIndex, 1);
        }
        board.push(row);
    }

    return board;
}

function initBoardSquares(): boolean[][] {
    const marked: boolean[][] = [];

    for (let i = 0; i < BOARD_SIZE; i++) {
        const row: boolean[] = [];
        for (let j = 0; j < BOARD_SIZE; j++) {
            row.push(false);
        }

        marked.push(row);
    }
    return marked;
}

export default function Bingo() {
    
    const [board, setBoard] = useState<string[][]>(() => randomizeBoard());
    const [markedSquares, setMarkedSquares] = useState<boolean[][]>(() => initBoardSquares());

    /**
     * Toggle a specific square on the board between marked and unmarked.
     * @param row Row index of the square to update
     * @param col Column index of the square to update
     */
    function handleToggleMarked(row: number, col: number): void {
        setMarkedSquares((oldBoard) => {
            const updated = oldBoard.map((item) => [...item]);
            updated[row][col] = !updated[row][col];
            return updated;
        });
    }

    /**
     * When the board is reset, first set all squares to unmarked.
     * Afterwards, randomly generate a new set of board squares and update it.
     */
    function handleResetBoard(): void {
        handleClearCard();
        setBoard(randomizeBoard());
    }

    /**
     * Sets all squares on the board to unmarked by calling the initialize board function
     */
    function handleClearCard(): void {
        setMarkedSquares(initBoardSquares());
    }

    return (
        <div className="">
            <div id="controls-btn-row" className="flex space-x-12 w-full justify-center mt-5">
                <button 
                    onClick={handleResetBoard}
                    className="px-5 py-3 bg-green-400 text-black rounded-md text-lg"
                >
                    New Card
                </button>
                <button 
                    onClick={handleClearCard}
                    className="px-5 py-3 bg-red-500 rounded-md text-lg"
                >
                    Clear Card
                </button>
            </div>
            <div className="flex justify-center mt-5 mb-10">
                {board.map((row: string[], rowIndex: number) => (
                    <div key={`${row}-${rowIndex}`}>
                        {row.map((task: string, colIndex: number) => (
                            <BingoSquare 
                                key={`${rowIndex}-${colIndex}`} 
                                goal={task}
                                marked={markedSquares[rowIndex][colIndex]}
                                rowIndex={rowIndex}
                                colIndex={colIndex}
                                toggleMarked={handleToggleMarked}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}