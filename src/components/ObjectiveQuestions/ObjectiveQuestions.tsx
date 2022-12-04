import React from "react";
import { Drawer, Box, Button } from "@mui/material";
import { useStyles } from "./ObjectiveQuestions.style";
import { NumberQuestionObjective } from "data/NumberQuestionObjective";
// import { ShowAnswerButton } from "components/ShowAnswerButton";

interface ObjectiveQuestionsProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onClose: (value: boolean) => void;
  openQuestion: boolean;
  numberQuestion: string;
  numberQuestionObjective: number;
  title: string;
}

const ObjectiveQuestions: React.FC<ObjectiveQuestionsProps> = ({
  onClick,
  onClose,
  openQuestion,
  numberQuestion,
  numberQuestionObjective,
  title,
}) => {
  const styles = useStyles();
  const questions = NumberQuestionObjective ?? [];

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
              {
                questions[numberQuestionObjective].alternatives.map(opcoesResposta => 
                  <Box className={styles.questionsAlternativeGroup}>
                      <button onClick={onClick} className={styles.questionsAlternativeTop}>{opcoesResposta.answer}</button>
                  </Box>
              )
              }
            </Box> 
          </Box>
        </Box>
      </Drawer>
    </React.Fragment>
  );
};

export { ObjectiveQuestions };