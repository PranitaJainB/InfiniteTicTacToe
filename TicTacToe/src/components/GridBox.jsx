import React from 'react'
import { styled } from 'styled-components';

const GridBox = () => {
  return (
    <div>
    <Row>
      <Cell>
        <EnterChoiceTxt>O</EnterChoiceTxt>
      </Cell>
      <Cell>
        <EnterChoiceTxt>O</EnterChoiceTxt>
      </Cell>
      <Cell>
        <EnterChoiceTxt>O</EnterChoiceTxt>
      </Cell>
    </Row>
    <Row>
      <Cell>
        <EnterChoiceTxt>O</EnterChoiceTxt>
      </Cell>
      <Cell>
        <EnterChoiceTxt>O</EnterChoiceTxt>
      </Cell>
      <Cell>
        <EnterChoiceTxt>O</EnterChoiceTxt>
      </Cell>
    </Row>
    <Row>
      <Cell>
        <EnterChoiceTxt>O</EnterChoiceTxt>
      </Cell>
      <Cell>
        <EnterChoiceTxt>O</EnterChoiceTxt>
      </Cell>
      <Cell>
        <EnterChoiceTxt>O</EnterChoiceTxt>
      </Cell>
    </Row>
  </div>
  )
}

export default GridBox

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