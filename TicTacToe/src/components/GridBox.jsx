import React, { useState } from "react";
import { styled } from "styled-components";
import RowBox from "./RowBox";

const GridBox = () => {
  const [gridArr, setGridArr] = useState(() =>
    Array(3).fill(null).map(() => Array(3).fill(null))
  );
  let turns = ["X", "O"];
  const [turn, setTurn] = useState(turns[0]);
  const ids = [0, 1, 2];
  const handleDataFromChild2 = (cellID) => {
    setTurn(turn==turns[0] ? turns[1] : turns[0])

    let i = cellID[0];
    let j = cellID[1];
    console.log("-->",[...gridArr]);
    setGridArr((prev)=>{
      let newArr = [...prev]
      newArr[i][j] = turn
      console.log(newArr);
      return newArr  
    })
    
  };
  return (
    <div>
      {ids.map((rowId) => {
        return (
          <RowBox
            key={rowId}
            id={rowId}
            onDataFromChild2={handleDataFromChild2}
          />
        );
      })}
    </div>
  );
};

export default GridBox;
