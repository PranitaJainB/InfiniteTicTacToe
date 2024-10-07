import styled from "styled-components";
import Score from "./Score";
import GridBox from "./GridBox";
import Button_ from "./Button_";
import ColorfulText from "./ColorfulText";

const PlayGame = () => {
  return (
    <Container>
      <ColorfulText />
      <TicTacToe>
        <Score />
        <GridBox />
        <Toast>turn of x</Toast>
      </TicTacToe>
      <Buttons>
        <Button_ onClick={()=>{alert("play clicked")}} btnLbl={"Play Again"} />
        <Button_ onClick={()=>{alert("Reset clicked")}} btnLbl={"Reset Score"} />
      </Buttons>
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

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 50px;
`;
