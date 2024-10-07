import styled from "styled-components";

const Score = () => {
  return (
    <ScoreContainer>
      <ScoreBox className="x">
        <label for="" class="PlayerLbl">
          Player X
        </label>
        <label for="" class="score">
          1
        </label>
      </ScoreBox>
      <ScoreBox className="draw">
        <label for="" class="PlayerLbl">
          Draw
        </label>
        <label for="" class="score">
          2
        </label>
      </ScoreBox>
      <ScoreBox className="o">
        <label for="" class="PlayerLbl">
          Player O
        </label>
        <label for="" class="score">
          2
        </label>
      </ScoreBox>
    </ScoreContainer>
  );
};

export default Score;

const ScoreContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 22px;
`;

const ScoreBox = styled.div`
  display: flex;
  width: 103px;
  height: 80px;
  padding: 14px 25px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  border-radius: 10px;

  &.x {
    background: #48d2fe;
  }

  &.draw {
    background: #bcdbf9;
  }
  &.o {
    background: #e2be00;
  }
  & .PlayerLbl {
    color: #000;
    font-family: Fredoka;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  & .score {
    color: #000;
    font-family: Inter;
    font-size: 42px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;