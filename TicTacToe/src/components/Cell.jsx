import React from "react";
import PropTypes from "prop-types";
import { styled } from "styled-components";

const CellBox = ({id,onDataFromChild2}) => {
  const handleClick = (id1) => {   
    onDataFromChild2(id1); // Send data back to Parent
  };
  return (
    <Cell id={id} onClick={()=>handleClick(id)}>
      <EnterChoiceTxt>X</EnterChoiceTxt>
    </Cell>
  );
};

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

export default CellBox;
