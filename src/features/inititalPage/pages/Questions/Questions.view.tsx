import React from "react";
import { Box } from "@mui/material";
import { useStyles } from "./Questions.style";
import { PageOne } from "features/inititalPage/components/pageOne";

export const QuestionsView: React.FC = () => {
    const styles = useStyles()

    return (
        <Box className={styles.background}>
            <Box className={styles.header}> 
                Questões - Quiz
            </Box>

            <Box className={styles.questions}> 
                <PageOne />
            </Box>
        </Box>
    );
}