import { useEffect, useState } from "react";
import BingoRow from "./BingoRow";
import type { BingoSquare } from "./types/BingoSquare";
import type { ChallengeSquare } from "./types/ChallengeSquare";

function ChallengeCard() {
  const [card, setCard] = useState<BingoSquare[][]>([]);

  useEffect(() => {
    fetch("/data/100k-bingo-items.jsonc")
      .then(res => res.json())
      .then((items: ChallengeSquare[]) => {
        const grid: BingoSquare[][] = Array.from({ length: 5 }, () =>
          Array.from({ length: 5 })
        );

        items.forEach(item => {
          grid[item.row - 1][item.col - 1] = {
            text: item.name,
            marked: item.isMarked,
          };
        });

        setCard(grid);
      });
  }, []);

    return (
    <div className="flex justify-center">
      <div>
        <h1 className="text-xl font-bold text-center mb-4">
          Couriway No-Reset Bingo
        </h1>

        {card.map((row, idx) => (
          <BingoRow
            key={idx}
            rowIndex={idx}
            rowContents={row}
            readOnly
          />
        ))}
      </div>
    </div>
  );
};

export default ChallengeCard;
