import React, { useState } from "react";
import { styled } from "styled-components";

const GridBox = ({ arr, playerXTurn, onCellClicked, origin, strike }) => {
  const handleClick = (cellID) => {
    onCellClicked(cellID);
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
      {strike && <Line top={origin[0]} rotate={origin[1]} left={origin[2]} />}
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
  left: ${(props) => props.left}%;
  top: ${(props) => props.top}%;
  position: absolute;
  background-color: #48d2fe;
  transform: rotate(${(props) => props.rotate}deg);
`;
