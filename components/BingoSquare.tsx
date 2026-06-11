"use client"

import { useState, useEffect } from "react";

export interface BingoSquareProps {
    goal: string;
    rowIndex: number;
    colIndex: number;
    marked: boolean;
    toggleMarked?: (row: number, col: number) => void;
}

export default function BingoSquare(props: BingoSquareProps) {
    const [isMarked, setMarked] = useState(props.marked);

    useEffect(() => {
        setMarked(props.marked);
    }, [props.marked]);

    const bgColor: string = props.marked ? `bg-amber-400` : `bg-black-100`;
    const bgHoverColor: string = props.marked ? `hover:bg-amber-500` : `hover:bg-purple-950`;

    const fontColor: string = props.marked ? `text-black` : `text-white`;

    function toggleMarked(): void {
        setMarked((prev) => !prev);
        if (props.toggleMarked) {
            props.toggleMarked(props.rowIndex, props.colIndex);
        }
    }

    return (
        <>
            <div className={`flex justify-center align-middle items-center ${bgColor} ${bgHoverColor} text-lg ${fontColor} font-extrabold text-center border-3 border-white p-3 aspect-square w-40 h-auto`}
                key={`${props.rowIndex}-${props.colIndex}`}
                onClick={toggleMarked}
            >
                {props.goal}
            </div>
        </>
    )
}