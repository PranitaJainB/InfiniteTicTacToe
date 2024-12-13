import React from 'react'
import styled from 'styled-components'

const Button_ = ({btnLbl,...props}) => {
  return (
    <Start{...props}>{btnLbl}</Start>
  )
}

export default Button_

const Start = styled.button`
  border-radius: 15px;
  background: #975fb1;
  padding: 10px 20px;
  gap: 10px;
  cursor: pointer;
  font-family: "Fredoka", system-ui;
  color: #2b0040;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
`;
