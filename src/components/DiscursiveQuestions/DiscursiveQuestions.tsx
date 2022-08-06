import React from "react";
import { Drawer, Box } from "@mui/material";
import { useStyles } from "./DiscrusiveQuestions.style";

interface DiscursiveQuestionsProps {
    openQuestion: boolean
}

const DiscursiveQuestions: React.FC<DiscursiveQuestionsProps> = ({
    openQuestion,
}) => {
  const styles = useStyles();

  return (
    <React.Fragment>
      <Drawer
        open={openQuestion}
      >
        <Box className={styles.content}></Box>
      </Drawer>
    </React.Fragment>
  );
};

export { DiscursiveQuestions };