import type { BingoSquare } from "./types/BingoSquare";

// Define a custom object that will hold the data needed for a row of the bingo card
type Props = {
  rowIndex: number;
  rowContents: BingoSquare[];
  onToggle?: (row: number, col: number) => void;
  readOnly?: boolean;
};



function BingoRow({ rowIndex, rowContents, onToggle, readOnly }: Props) {
  return (
    <div className="flex">
      {rowContents.map((square, colIndex) => (
        <div key={colIndex}
          onClick={!readOnly && onToggle ? () => onToggle(rowIndex, colIndex) : undefined}
          className={`group relative p-4 border flex justify-center items-center aspect-square w-36 h-36 text-center text-purple-700
            ${square.marked ? "bg-green-400" : "bg-yellow-200"}
            ${readOnly ? "cursor-default" : "cursor-pointer"}`}
        >
          <div className="flex flex-col items-center">
            <div className="whitespace-normal">{square.text}</div>
            {square.marked && square.runMarked != null && (
              <div className="mt-2 font-semibold text-gray-800">
                Run {square.runMarked}
              </div>)}
          </div>

          {/* Tooltip that displays the description of an item in the bingo card */}
          {square.desc && (
            <div className="pointer-events-none absolute left-1/2 bottom-full transform -translate-x-1/2 z-50 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity">
              <div className="bg-gray-800 text-white text-sm px-3 py-2 rounded text-center w-xs wrap-break-word shadow-lg">
                {square.desc}
              </div>
              <div className="w-3 h-3 bg-gray-800 rotate-45 mx-auto -mt-1" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default BingoRow;
