import React from "react";
import { Drawer, Box, Button } from "@mui/material";
import { useStyles } from "./ObjectiveQuestions.style";
// import { ShowAnswerButton } from "components/ShowAnswerButton";

interface ObjectiveQuestionsProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onClose: (value: boolean) => void;
  openQuestion: boolean;
  numberQuestion: string;
  title: string;
  alternativeOne: string;
  alternativeTwo: string;
  alternativeThree: string;
  alternativeFour: string;
}

const ObjectiveQuestions: React.FC<ObjectiveQuestionsProps> = ({
  onClick,
  onClose,
  openQuestion,
  numberQuestion,
  title,
  alternativeOne,
  alternativeTwo,
  alternativeThree,
  alternativeFour,
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
          <Box className={styles.answerButton}>
            {/* Inicialmente, aqui não ser utilizado, caso se confirme, retirar essa box */}
          </Box>
          <Box className={styles.answer}>
            {/* Aqui vai ser desenvolvido a lógica das questões objetivas */}
            <Box className={styles.questionsAlternativeGroup}>
              <button onClick={onClick} className={styles.questionsAlternativeTop}>{alternativeOne}</button>
              <button onClick={onClick} className={styles.questionsAlternativeBottom}>{alternativeTwo}</button>
            </Box>
            <Box>
              <button onClick={onClick} className={styles.questionsAlternativeTop}>{alternativeThree}</button>
              <button onClick={onClick} className={styles.questionsAlternativeBottom}>{alternativeFour}</button>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </React.Fragment>
  );
};

export { ObjectiveQuestions };