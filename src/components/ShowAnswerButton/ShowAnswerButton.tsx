import React from "react";
import { Box } from "@mui/material";
import { useStyles } from "./ShowAnswerButton.style";

interface ShowAnswerButtonProps {
    children: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ShowAnswerButton: React.FC<ShowAnswerButtonProps> = ({children, onClick}) => {
    const styles = useStyles();

    return(
        <Box>
            <button onClick={onClick} className={styles.button}>{children}</button>
        </Box>
    );
}

export { ShowAnswerButton }