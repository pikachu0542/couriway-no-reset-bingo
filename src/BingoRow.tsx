import BingoSquare from "./BingoSquare";

function BingoRow({rowContents} : {rowContents: string[]}) {
    return (
        <>
            <div className="h-38">
                {rowContents.map((data) => <BingoSquare normalBg="#ffffff" markedBg="#60e80f" textContents={data}/>)}
            </div>
        </>
    )
}

export default BingoRow;