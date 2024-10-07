import styled from "styled-components";
import Score from "./Score";
import GridBox from './GridBox';

const PlayGame = () => {
  return (
    <Container>
      <TextColorful>
        tic. <span>tac.</span> toe.
      </TextColorful>
      <TicTacToe>
        <Score />
        <GridBox/>
        <Toast>turn of x</Toast>
      </TicTacToe>
      <Gap>
        <Start>Play Again</Start>

        <Start>Reset Score</Start>
      </Gap>
    </Container>
  );
};

export default PlayGame;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  margin: 0;
  background: #5a1e76;
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
  span {
    color: #72cff9;
    font-size: 331.643px;
    font-style: normal;
    font-weight: 400;
    line-height: 188.042px;
  }
`;

const TicTacToe = styled.div`
  height: 600px;
  width: 444px;
  border-radius: 50px;
  background: #2b0040;
  margin: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 112px 135px;
`;




const Toast = styled.div`
  color: white;
  border-radius: 5px;
  background: #099c3b;
  width: 310px;
  height: 87px;
  text-align: center;
  padding: 20px;
  font-size: larger;
`;

const Buttons = styled.div``;

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

const Gap = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 50px;
`;


