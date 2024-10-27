import React from "react";
import PropTypes from "prop-types";
import { styled } from "styled-components";
import CellBox from "./Cell";

const RowBox = ({id,onDataFromChild2}) => {
  const ids = [0,1,2]
  return (
    <Row>
      {ids.map((cellId)=><CellBox key={cellId} id={`${id}${cellId}`}  onDataFromChild2={onDataFromChild2}/>)}
    </Row>
  );
};

export default RowBox;

const Row = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
