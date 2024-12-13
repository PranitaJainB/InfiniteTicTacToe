import styled from "styled-components";
import ColorfulText from "./ColorfulText";
import Button_ from "./Button_";

const Cover = (props) => {

  return (    
      <Container>
        <ColorfulText />
        <Button_ btnLbl={"Start Game"} {...props} />
        <Board>
          <img src="/images/titactoe.png" alt="board" className="tictactoeBoard" />
        </Board>
      </Container>    
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

const Board = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
