import ChallengeSquare, { ChallengeSquareProps } from "@/components/ChallengeSquare";
import challengeGoals from "../../public/data/100k-bingo-items.json";

const BOARD_SIZE: number = 5;

function buildBoard() {
    let boardData: ChallengeSquareProps[][] = [];

    // Loop for each row, and add items one row at a time
    for (let i = 0; i < BOARD_SIZE; i++) {
        let boardRow: ChallengeSquareProps[] = [];

        // Loop through each item in the row
        for (let j = 0; j < BOARD_SIZE; j++) {

            let currGoalIndex: number = (i * BOARD_SIZE) + j;

            // Defining shorthand so the code below is more readable
            let currSquare = challengeGoals[currGoalIndex];

            // Set the props from 
            let newSquareProps: ChallengeSquareProps = {
                goal: currSquare.name,
                desc: currSquare.desc,
                marked: currSquare.isMarked,
                runMarked: currSquare.runMarked,
                row: currSquare.row,
                col: currSquare.col
            };

            boardRow.push(newSquareProps);
        }

        boardData.push(boardRow);
    }

    return boardData;
}

export default function ChallengeBingo() {
    
    const board = buildBoard();

    return (
        <div className="">
            <h1 className="text-5xl font-extrabold text-yellow-400 text-center mt-5 mb-5">100k Bingo</h1>
            <div className="flex flex-col items-center align-middle justify-center mt-5">
                {board.map((row: ChallengeSquareProps[], rowIndex: number) => (
                    <div key={`${row}-${rowIndex}`} className="flex">
                        {row.map((square: ChallengeSquareProps, colIndex: number) => (
                            <ChallengeSquare 
                                key={`${rowIndex}-${colIndex}`} 
                                goal={square.goal}
                                desc={square.desc}
                                marked={square.marked}
                                runMarked={square.runMarked}
                                row={square.row}
                                col={square.col}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )

}