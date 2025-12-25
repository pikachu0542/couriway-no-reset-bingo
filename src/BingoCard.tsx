import { useEffect, useState } from "react";
import { RandomRange } from "./util";
import BingoRow from "./BingoRow";

function BingoCard() {

    // Fetch the list of all possible NRS bingo squares
    const [nrsItems, setNrsItems] = useState([]);
    
    useEffect(() => {
        fetch("/data/nrs-bingo-items.json")
        .then(response => response.json())
        .then(nrsItems => setNrsItems(nrsItems))
        .catch(error => console.error("Error fetching data: ", error));
    }, []);

    const CARD_SIZE: number = 25;

    let cardSquares = [];
    let nrsItemsCopy = [...nrsItems];

    const NUM_ROWS = Math.sqrt(CARD_SIZE);
    const ROW_LEN = CARD_SIZE / NUM_ROWS;

    if (!nrsItems || nrsItems.length <= CARD_SIZE) {
        console.error("Unable to create bingo card: Items list is null or empty")
    }
    for (let row = 0; row < NUM_ROWS; row++) {

        let rowArr: Array<string> = [];

        for (let col = 0; col < ROW_LEN; col++) {
            let itemIndex = RandomRange(0, nrsItemsCopy.length - 1);
            rowArr.push(nrsItems[itemIndex]);
            nrsItemsCopy.splice(itemIndex, 1);
        }

        cardSquares.push(rowArr);
    }

    console.log(cardSquares);
    return (
        <>
            <div className="flex justify-center">
                <div className="">
                    {cardSquares.map((val, i) => 
                    <div key={i}>
                        <BingoRow rowContents={val}/>
                    </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default BingoCard;