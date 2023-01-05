import { Box } from "@mui/material";
import React, { useState } from "react";
import { useStyles } from "./Scoreboard.style";
import { Participants } from "data/Participants";

const Scoreboard: React.FC = () => {
  const styles = useStyles();

  const player = Participants;
  const [scorePlayerOne, setScorePlayerOne] = useState(Number);
  const [scorePlayerTwo, setScorePlayerTwo] = useState(Number);

  const sumPontPlayerOne = () => {
    setScorePlayerOne(scorePlayerOne + 10);
  }

  const sumPontPlayerTwo = () => {
    setScorePlayerTwo(scorePlayerTwo + 10);
  }

  return (
    <React.Fragment>
      <Box className={styles.score}>
      <button onClick={sumPontPlayerOne}> + </button>
        <Box className={styles.scorePlayerOne}>
          {scorePlayerOne}
        </Box>
        <Box className={styles.scorePlayerTwo}>
          {scorePlayerTwo}
        </Box>
        <button onClick={sumPontPlayerTwo}> + </button>
      </Box>
      <Box className={styles.content}>
        <Box className={styles.playerOne}>
          {player.playerOne.toUpperCase()}
        </Box>
        <Box className={styles.playerTwo}>
          {player.playerTwo.toUpperCase()}
        </Box>
      </Box>
    </React.Fragment>
  );
}

export { Scoreboard };