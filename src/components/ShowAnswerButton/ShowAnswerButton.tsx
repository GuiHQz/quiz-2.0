import React from "react";
import { Box, Button } from "@mui/material";
import { useStyles } from "./ShowAnswerButton.style";

interface ShowAnswerButtonProps {
    children: string;
}

const ShowAnswerButton: React.FC<ShowAnswerButtonProps> = ({children}) => {
    const styles = useStyles();

    return(
        <Box>
            <button className={styles.button}>{children}</button>
        </Box>
    );
}

export { ShowAnswerButton }