import React from "react";
import { Drawer, Box } from "@mui/material";
import { useStyles } from "./DiscrusiveQuestions.style"

export const DiscursiveQuestions: React.FC = () => {
    const styles = useStyles();

    return(
        <React.Fragment>
            <Drawer>

            </Drawer>

            <Box className={styles.content}>
                
            </Box>
        </React.Fragment>
    )
}