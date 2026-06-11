export interface ChallengeSquareProps {
    goal: string;
    desc: string;
    marked: boolean;
    runMarked: number | null;
    row: number;
    col: number;
}

export default function ChallengeSquare(props: ChallengeSquareProps) {

    const bgColor: string = props.marked ? `bg-amber-400` : `bg-black-100`;
    const bgHoverColor: string = props.marked ? `hover:bg-amber-500` : `hover:bg-purple-950`;

    const fontColor: string = props.marked ? `text-black` : `text-white`;

    return (
        <>
            <div 
                className={`flex flex-col justify-center align-middle items-center ${bgColor} ${fontColor} ${bgHoverColor} font-extrabold text-center aspect-square w-40 h-auto p-4 border-2 border-white`}
                key={`${props.row}-${props.col}`}
                title={props.desc}
            >
                <h3 className="text-lg">{props.goal}</h3>
                <br />
                <div className="text-lg font-extrabold text-green-900">{props.marked ? <p>Run {props.runMarked}</p> : <></>}</div>
            </div>
        </>
    )
}