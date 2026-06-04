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

    const bgColor: string = isMarked ? `bg-green-600` : `bg-black-100`;
    const bgHoverColor: string = isMarked ? `bg-green-800` : `bg-purple-300`;

    function toggleMarked(): void {
        setMarked((prev) => !prev);
        if (props.toggleMarked) {
            props.toggleMarked(props.rowIndex, props.colIndex);
        }
    }

    return (
        <>
            <div className={`flex ${bgColor} p-5 text-center justify-center align-middle items-center aspect-square w-40 h-auto border-2 hover:${bgHoverColor}`}
                key={`${props.rowIndex}-${props.colIndex}`}
                onClick={toggleMarked}
            >
                {props.goal}
            </div>
        </>
    )
}