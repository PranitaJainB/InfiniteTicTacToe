import styled from "styled-components";

const Cover = (props) => {
  return (
    <>
      <Container>
        <TextColorful>
          tic. <span >tac.</span> toe.
        </TextColorful>
        <Start  {...props}>Start Game</Start>
        <Board>
          <img src="/images/titactoe.png" alt="board" class="tictactoeBoard" />
        </Board>
      </Container>
    </>
  );
};

export default Cover;

const Container = styled.div`
  background: #5a1e76;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
`;

const TextColorful = styled.label`
  color: #dcbf3f;
  width: 643px;
  height: 565px;
  font-size: 331.643px;
  font-family: "Fredoka", system-ui;
  font-style: normal;
  font-weight: 400;
  line-height: 188.042px;
  span{
   color: #72cff9;

  font-size: 331.643px;
  font-style: normal;
  font-weight: 400;
  line-height: 188.042px;}
`;


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
 border:none;
`;

const Board = styled.div`
display: flex;
flex-wrap: wrap;
`;
