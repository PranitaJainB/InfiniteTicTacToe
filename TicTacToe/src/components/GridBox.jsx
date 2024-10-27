import React, { useState } from "react";
import { styled } from "styled-components";
import RowBox from "./RowBox";

const GridBox = () => {
  const [gridArr, setGridArr] = useState(Array(9).fill(null));
  const ids = [0, 1, 2];
  const handleDataFromChild2 = (cellID) => {
    alert(`${cellID} clicked`);
  };
  return (
    <div>
      {ids.map((rowId) => {
        return <RowBox key={rowId} id={rowId} onDataFromChild2={handleDataFromChild2}/>;
      })}
    </div>
  );
};

export default GridBox;
