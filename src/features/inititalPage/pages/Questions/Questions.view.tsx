import React from "react";
import { Box } from "@mui/material";
import { useStyles } from "./Questions.style";
import { ObjectiveQuestions } from "features/inititalPage/components/ObjectiveQuestions";

export const QuestionsView: React.FC = () => {
    const styles = useStyles()

    return (
        <Box className={styles.background}>
            <Box className={styles.header}> 
                Questões - Quiz
            </Box>

            <Box className={styles.questions}> 
                <ObjectiveQuestions />
            </Box>
        </Box>
    );
}