import React from "react";
import { Drawer, Box, Button } from "@mui/material";
import { useStyles } from "./DiscrusiveQuestions.style";

interface DiscursiveQuestionsProps {
  openQuestion: boolean;
  onClose: (value: boolean) => void;
  numberQuestion: string;
  title?: string;
  answer?: string;
}

const DiscursiveQuestions: React.FC<DiscursiveQuestionsProps> = ({
  openQuestion,
  onClose,
  numberQuestion,
  title,
  answer,
}) => {
  const styles = useStyles();

  const onCloseQuestion = () => {
    onClose(false);
  }

  return (
    <React.Fragment>
      <Drawer
        open={openQuestion}
        onClose={() => onClose(false)}
      >
        <Box className={styles.content}>
            <Button
              onClick={onCloseQuestion}
              className={styles.closeButton}>Fechar</Button>
          <Box className={styles.title}>
            <span>{numberQuestion}. {title}</span>
          </Box>
          <Box className={styles.title}>
            <span>{answer}</span>
          </Box>
        </Box>
      </Drawer>
    </React.Fragment>
  );
};

export { DiscursiveQuestions };