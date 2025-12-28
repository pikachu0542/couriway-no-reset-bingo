import type { BingoSquare } from "./types/BingoSquare";

// Type definition for the props this component will need
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
        <div
          key={colIndex}
          onClick={!readOnly && onToggle 
                    ? () => onToggle(rowIndex, colIndex)
                    : undefined
                  }
          className={`p-4 border flex justify-center items-center aspect-square w-36 h-36 text-center text-purple-700
            ${square.marked ? "bg-green-400" : "bg-yellow-200"}
            ${readOnly ? "cursor-default" : "cursor-pointer"}`
          }
        >
          {square.text}
        </div>
      ))}
    </div>
  );
}

export default BingoRow;
