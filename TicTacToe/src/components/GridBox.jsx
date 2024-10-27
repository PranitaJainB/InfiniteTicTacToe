import React, { useState } from "react";
import { styled } from "styled-components";
import RowBox from "./RowBox";

const GridBox = () => {
  const [gridArr, setgridArr] = useState(Array(9).fill(null));
  const ids = [0, 1, 2];
  const clickHandler = (cellID) => {
    alert(`${cellID} clicked`);
  };
  return (
    <div>
      {ids.map((rowId) => {
        return <RowBox key={rowId} id={rowId} />;
      })}
    </div>
  );
};

export default GridBox;
