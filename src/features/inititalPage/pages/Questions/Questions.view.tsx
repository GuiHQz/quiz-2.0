import React from "react";
import { Box } from "@mui/material";
import { useStyles } from "./Questions.style";

export const QuestionsView: React.FC = () => {
    const styles = useStyles()

    return (
        <Box className={styles.background}>
            <Box className={styles.header}> 
                Questões - Twitch 
            </Box>

            <Box className={styles.questions}> 
                Questões
            </Box>
        </Box>
    );
}