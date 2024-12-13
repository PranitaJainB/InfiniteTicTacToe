import React, { useState } from "react";
import { styled } from "styled-components";

const GridBox = ({arr,playerXTurn,onCellClicked,top,rotate,left,strike}) => {
  const handleClick = (cellID) => {
    onCellClicked(cellID)
  };
  return (
    <div>
      <Row>
        <Cell id={0} onClick={() => handleClick(0)}>
          <EnterChoiceTxt>{arr[0]}</EnterChoiceTxt>
        </Cell>
        <Cell id={1} onClick={() => handleClick(1)}>
          <EnterChoiceTxt>{arr[1]}</EnterChoiceTxt>
        </Cell>
        <Cell id={2} onClick={() => handleClick(2)}>
          <EnterChoiceTxt>{arr[2]}</EnterChoiceTxt>
        </Cell>
      </Row>
      <Row>
        <Cell id={3} onClick={() => handleClick(3)}>
          <EnterChoiceTxt>{arr[3]}</EnterChoiceTxt>
        </Cell>
        <Cell id={4} onClick={() => handleClick(4)}>
          <EnterChoiceTxt>{arr[4]}</EnterChoiceTxt>
        </Cell>
        <Cell id={5} onClick={() => handleClick(5)}>
          <EnterChoiceTxt>{arr[5]}</EnterChoiceTxt>
        </Cell>
      </Row>
      <Row>
        <Cell id={6} onClick={() => handleClick(6)}>
          <EnterChoiceTxt>{arr[6]}</EnterChoiceTxt>
        </Cell>
        <Cell id={7} onClick={() => handleClick(7)}>
          <EnterChoiceTxt>{arr[7]}</EnterChoiceTxt>
        </Cell>
        <Cell id={8} onClick={() => handleClick(8)}>
          <EnterChoiceTxt>{arr[8]}</EnterChoiceTxt>
        </Cell>
      </Row>
      {strike && <Line top={top} rotate={rotate} left={left}/>}

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

const Row = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Cell = styled.div`
  display: flex;
  height: 105px;
  width: 105px;
  background-color: #43115b;
  margin-right: 20px;
  color: #dcbf3f;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #5a1e76;
`;

const EnterChoiceTxt = styled.div`
  color: var(--g21-color, #e2be00);
  text-align: center;
  font-family: "Fredoka One";
  font-size: 94px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Line = styled.div`
  width: 18%;
  height: 2px;
  left:${(props)=>props.left}%;
  top: ${(props)=>props.top}%;
  position: absolute;
  background-color: #48d2fe;
   transform: rotate(${(props)=>props.rotate}deg);
`;