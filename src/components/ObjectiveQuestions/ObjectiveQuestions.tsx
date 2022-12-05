import React, { useState } from "react";
import { Drawer, Box, Button } from "@mui/material";
import { useStyles } from "./ObjectiveQuestions.style";
import { NumberQuestionObjective } from "data/NumberQuestionObjective";

interface ObjectiveQuestionsProps {
  onClose: (value: boolean) => void;
  openQuestion: boolean;
  numberQuestion: string;
  numberQuestionObjective: number;
  title: string;
}

const ObjectiveQuestions: React.FC<ObjectiveQuestionsProps> = ({
  onClose,
  openQuestion,
  numberQuestion,
  numberQuestionObjective,
  title,
}) => {
  const styles = useStyles();
  const questions = NumberQuestionObjective ?? [];
  const [validateQuestion, setValidateQuestion] = useState(1);

  const onCloseQuestion = () => {
    onClose(false);
    setValidateQuestion(1)
  }

  const testeOnClick = (isCorrect: boolean) => {
    if (isCorrect) {
      console.log("correta")
      setValidateQuestion(2)
    }
    else if (!isCorrect) {
      setValidateQuestion(3)
      console.log("errada")
    }
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
          <Box className={styles.answer}>
            <Box className={styles.questionsAlternativeGroup}>
              {
                questions[numberQuestionObjective].alternatives.map(opcoesResposta =>
                  <Box className={styles.questionsAlternativeGroup}>
                    <button onClick={() => testeOnClick(opcoesResposta.isCorrect)} className={styles.questionsAlternativeTop}>{opcoesResposta.alternative})  {opcoesResposta.answer}</button>
                  </Box>
                )
              }
            </Box>
            {/*Amanhã criar botão para as respostas nos componentes globais e criar uma prop que vai
            permitir que possa modificar a cor setando o estado dela, tipo no exemplo do wesley, onde:
            
            prop: mudarCor={validateQuestion} e ele vai ditar a cor, se baseando nas linhas 67 até a 81
            */}
            <Box className={styles.validateQuestion}>
              {
                validateQuestion == 2 &&
                <Box>
                  <button className={styles.correctAnswer}></button>
                </Box>
              }
              {
                validateQuestion == 3 &&
                <Box>
                  teste
                </Box>
              }
            </Box>
          </Box>
        </Box>
      </Drawer>
    </React.Fragment>
  );
};

export { ObjectiveQuestions };