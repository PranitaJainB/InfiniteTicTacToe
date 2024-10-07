import React from "react";
import { styled } from "styled-components";

const ColorfulText = () => {
  return (
    <TextColorful>
      tic. <span>tac.</span> toe.
    </TextColorful>
  );
};

export default ColorfulText;

const TextColorful = styled.label`
  color: #dcbf3f;
  width: 643px;
  height: 565px;
  font-size: 331.643px;
  font-family: "Fredoka", system-ui;
  font-style: normal;
  font-weight: 400;
  line-height: 188.042px;
  span {
    color: #72cff9;
  }
`;
