import type { BingoSquare } from "./types/BingoSquare";

// Type definition for the props this component will need
type Props = {
  rowIndex: number;
  rowContents: BingoSquare[];
  onToggle: (row: number, col: number) => void;
};


function BingoRow({ rowIndex, rowContents, onToggle }: Props) {
  return (
    <div className="flex">
      {rowContents.map((square, colIndex) => (
        <div
          key={colIndex}
          onClick={() => onToggle(rowIndex, colIndex)}
          style={{justifyContent: "center", alignContent: "center"}}
          className={`p-4 border cursor-pointer aspect-square w-36 h-36 text-center ${square.marked ? "bg-green-400" : "bg-white"}`}
        >
          {square.text}
        </div>
      ))}
    </div>
  );
}

export default BingoRow;
