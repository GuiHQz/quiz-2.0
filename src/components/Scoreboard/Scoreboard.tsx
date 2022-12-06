import { Box } from "@mui/material";
import React from "react";
import { useStyles } from "./Scoreboard.style";

const Scoreboard: React.FC = () => {
  const styles = useStyles();

  return (
    <React.Fragment>
      <Box className={styles.score}>
        <Box className={styles.scorePlayerOne}>
          10
        </Box>
        <Box className={styles.scorePlayerTwo}>
          10
        </Box>
      </Box>
      <Box className={styles.content}>
        <Box className={styles.playerOne}>
          Player 1
        </Box>
        <Box className={styles.playerTwo}>
          Player 2
        </Box>
      </Box>
    </React.Fragment>
  );
}

export { Scoreboard };