import React, { useState } from "react";
import { styled } from "styled-components";

const GridBox = () => {
  const [gridArr, setGridArr] = useState(Array(9).fill(null));
  const handleClick = (cellID) => {
    alert(`${cellID} clicked`);
  };
  return (
    <div>
      <Row>
        <Cell id={0} onClick={() => handleClick(id)}>
          <EnterChoiceTxt>gridArr[0]</EnterChoiceTxt>
        </Cell>
        <Cell id={1} onClick={() => handleClick(id)}>
          <EnterChoiceTxt>gridArr[1]</EnterChoiceTxt>
        </Cell>
        <Cell id={2} onClick={() => handleClick(id)}>
          <EnterChoiceTxt>gridArr[2]</EnterChoiceTxt>
        </Cell>
      </Row>
      <Row>
        <Cell id={3} onClick={() => handleClick(id)}>
          <EnterChoiceTxt>gridArr[3]</EnterChoiceTxt>
        </Cell>
        <Cell id={4} onClick={() => handleClick(id)}>
          <EnterChoiceTxt>gridArr[4]</EnterChoiceTxt>
        </Cell>
        <Cell id={5} onClick={() => handleClick(id)}>
          <EnterChoiceTxt>gridArr[5]</EnterChoiceTxt>
        </Cell>
      </Row>
      <Row>
        <Cell id={6} onClick={() => handleClick(id)}>
          <EnterChoiceTxt>gridArr[6]</EnterChoiceTxt>
        </Cell>
        <Cell id={7} onClick={() => handleClick(id)}>
          <EnterChoiceTxt>gridArr[7]</EnterChoiceTxt>
        </Cell>
        <Cell id={8} onClick={() => handleClick(id)}>
          <EnterChoiceTxt>gridArr[8]</EnterChoiceTxt>
        </Cell>
      </Row>
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
