import React from "react";
import { Box } from "@mui/material"
import { useStyles } from "./ObjectiveQuestions.style"

export const ObjectiveQuestionsView: React.FC = () => {
    const styles = useStyles();

    return (
        <Box>
            <Box className={styles.boxesRow}>
                <span className={styles.box}>1</span>
                <span className={styles.box}>2</span>
                <span className={styles.box}>3</span>
                <span className={styles.box}>4</span>
                <span className={styles.box}>5</span>
            </Box>
            <Box className={styles.boxesRow}>
                <span className={styles.box}>6</span>
                <span className={styles.box}>7</span>
                <span className={styles.box}>8</span>
                <span className={styles.box}>9</span>
                <span className={styles.box}>10</span>
            </Box>
        </Box>
    )
}