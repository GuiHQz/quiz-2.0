import React from "react";
import { Box } from "@mui/material";
import { useStyles } from "./PageOne.style";
import { DiscursiveQuestions } from "components/DiscursiveQuestions";

export const PageOneView: React.FC = () => {
    const styles = useStyles()

    return (
        <Box className={styles.background}>

            <Box className={styles.header}> 
                Questões - Quiz
            </Box>

            <Box className={styles.questions}> 
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
                    <Box>
                        <DiscursiveQuestions />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}