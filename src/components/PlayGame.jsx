import styled from "styled-components";
import Score from "./Score";
import GridBox from "./GridBox";
import Button_ from "./Button_";
import ColorfulText from "./ColorfulText";
import { useEffect, useState } from "react";
import toastText from "./toastText";

const winnigCombination = [
  { combo: [0, 1, 2], origin: [40, 0, 44.5] },
  { combo: [3, 4, 5], origin: [53, 0, 44.5] },
  { combo: [6, 7, 8], origin: [66, 0, 44.5] },

  { combo: [0, 3, 6], origin: [53, 90, 38] },
  { combo: [1, 4, 7], origin: [53, 90, 44.5] },
  { combo: [2, 5, 8], origin: [53, 90, 51] },

  { combo: [0, 4, 8], origin: [53, 45, 44.5] },
  { combo: [2, 4, 6], origin: [53, -45, 44.5] },
];
function checkWinner(arr, setOrigin, setMakeStrike, setToast, setScore) {
  for (let index = 0; index < winnigCombination.length; index++) {
    let winningCell = [...winnigCombination[index].combo];
    if (
      arr[winningCell[0]] != null &&
      arr[winningCell[0]] == arr[winningCell[1]] &&
      arr[winningCell[0]] == arr[winningCell[2]]
    ) {
      setOrigin([...winnigCombination[index].origin]);
      setMakeStrike(true);
      setToast(
        arr[winningCell[0]] == "X"
          ? toastText.PlayerXWins
          : toastText.PlayerOWins
      );
      setScore((prev) => {
        let tempScore = [...prev];
        arr[winningCell[0]] == "X" ? tempScore[0]++ : tempScore[2]++;
        return [...tempScore];
      });
      return;
    }
  }
  const noNullFound = arr.every((item) => item != null);
  if (noNullFound) {
    setToast(toastText.GameDraw);
    setScore((prev) => {
      let tempScore = [...prev];
      tempScore[1]++;
      return [...tempScore];
    });
  }
}

const PlayGame = () => {
  console.log("component rendered");
  const [score, setScore] = useState(new Array(3).fill(0));
  const [arr, setArr] = useState(new Array(9).fill(null));
  const [playerXTurn, setPlayerXTurn] = useState(true);
  const [makeStrike, setMakeStrike] = useState(false);
  const [toast, setToast] = useState(" ");
  const [origin, setOrigin] = useState(new Array(3).fill(0));

  const handleCellClicked = (cellID) => {
    //if cell is not empty then don't do any action
    if (arr[cellID] != null) return;
    //change into array need to be saved first
    let newArr = [...arr];
    newArr[cellID] = playerXTurn ? "X" : "O";
    setArr([...newArr]);
    setPlayerXTurn(!playerXTurn);
  };
  function newGame() {
    const arrTemp = new Array(9).fill(null);
    setArr([...arrTemp]);
    setPlayerXTurn(true);
    setMakeStrike(false);
  }
  const reset = () => {
    newGame();
    const scoreTemp = new Array(3).fill(0);
    setScore([...scoreTemp]);
  };

  useEffect(() => {

    setToast(playerXTurn ? toastText.PlayerXTurn : toastText.PlayerOTurn);
  }, [playerXTurn]);

  useEffect(() => {
    checkWinner(arr, setOrigin, setMakeStrike, setToast, setScore);
  }, [arr]);
  return (
    <Container>
      <ColorfulText />
      <TicTacToe>
        <Score score={score} />
        <GridBox
          arr={arr}
          playerXTurn={playerXTurn}
          onCellClicked={handleCellClicked}
          strike={makeStrike}
          origin={origin}
        />
        <Toast>{toast}</Toast>
      </TicTacToe>
      <Buttons>
        <Button_
          onClick={() => {
            newGame();
          }}
          btnLbl={"New Game"}
        />
        <Button_
          onClick={() => {
            reset();
          }}
          btnLbl={"Reset Score"}
        />
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
