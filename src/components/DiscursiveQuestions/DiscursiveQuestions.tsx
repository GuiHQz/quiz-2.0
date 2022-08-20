import React from "react";
import { Drawer, Box, Button } from "@mui/material";
import { useStyles } from "./DiscrusiveQuestions.style";
import { ShowAnswerButton } from "components/ShowAnswerButton";

interface DiscursiveQuestionsProps {
  openQuestion: boolean;
  onClose: (value: boolean) => void;
  numberQuestion: string;
  title: string;
  answer: string;
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
              className={styles.closeButton}>X</Button>
          <Box className={styles.title}>
            <span>{numberQuestion}. {title}</span>
          </Box>
          <Box>
            <ShowAnswerButton>Resposta</ShowAnswerButton>
          </Box>
          <Box className={styles.answer}>
            <span>{answer}</span>
          </Box>
        </Box>
      </Drawer>
    </React.Fragment>
  );
};

export { DiscursiveQuestions };