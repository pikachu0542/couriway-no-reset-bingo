import { useState } from "react";

function BingoSquare({ normalBg, markedBg, textContents }: {normalBg: string, markedBg: string, textContents: string}) {

    const [isMarked, setIsMarked] = useState(false);

    const toggleMarked = () => {
        setIsMarked(isMarked => !isMarked);
    }

    return (
        <>
            <span className="m-1">
                <button onClick={toggleMarked} className="border-2 w-36 h-36 inline-flex text-center justify-center align-text-top" style={{backgroundColor: isMarked ? markedBg : normalBg, alignItems: "center"}}>{textContents}</button>
            </span>
        </>
    )
}

export default BingoSquare;