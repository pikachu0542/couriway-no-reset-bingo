export interface ChallengeSquareProps {
    goal: string;
    desc: string;
    marked: boolean;
    runMarked: number | null;
    row: number;
    col: number;
}

export default function ChallengeSquare(props: ChallengeSquareProps) {

    const bgColor: string = props.marked ? `bg-green-600` : `bg-black-100`;
    const bgHoverColor: string = props.marked ? `bg-green-800` : `bg-purple-300`;

    return (
        <>
            <div 
                className={`flex flex-col ${bgColor} p-5 text-center justify-center align-middle items-center aspect-square w-40 h-auto border-2 hover:${bgHoverColor}`}
                key={`${props.row}-${props.col}`}
                title={props.desc}
            >
                <h3 className="text-lg">{props.goal}</h3>
                <br/>
                <div className="text-lg font-extrabold text-amber-400">{props.marked ? <p>Run {props.runMarked}</p> : <></>}</div>
            </div>
        </>
    )
}