import React from "react";
import { Box } from "@mui/material";
import { useStyles } from "./PageObjectiveQuestions.style";
import { ObjectiveQuestions } from "components/ObjectiveQuestions";

interface PageObjectiveQuestionsViewProps {
  firstQuestion: VoidFunction;
  secondQuestion: VoidFunction;
  thirdQuestion: VoidFunction;
  fourthQuestion: VoidFunction;
  fifthQuestion: VoidFunction;
  sixthQuestion: VoidFunction;
  sevethQuestion: VoidFunction;
  eighthQuestion: VoidFunction;
  ninthQuestion: VoidFunction;
  tenthQuestion: VoidFunction;
  numberQuestion: string;
  numberQuestionObjective: number;
  title: string;
  openQuestion: boolean;
  onClose: (value: boolean) => void;
}

const PageObjectiveQuestionsView: React.FC<PageObjectiveQuestionsViewProps> = ({
  firstQuestion,
  secondQuestion,
  thirdQuestion,
  fourthQuestion,
  fifthQuestion,
  sixthQuestion,
  sevethQuestion,
  eighthQuestion,
  ninthQuestion,
  tenthQuestion,
  numberQuestion,
  numberQuestionObjective,
  title,
  openQuestion,
  onClose,
}) => {
    const styles = useStyles();

    return(
        <Box className={styles.background}>
      {/* <Box className={styles.header}>Questões - Quiz</Box> */}

      <Box className={styles.questions}>
        <Box>
          <Box className={styles.boxesRow}>
            <span className={styles.box} onClick={firstQuestion}>
              1
            </span>

            <span className={styles.box} onClick={firstQuestion}>
              2
            </span>

            <span className={styles.box} onClick={firstQuestion}>
              3
            </span>

            <span className={styles.box} onClick={firstQuestion}>
              4
            </span>

            <span className={styles.box} onClick={firstQuestion}>
              5
            </span>
          </Box>
          <Box className={styles.boxesRow}>
            <span className={styles.box} onClick={firstQuestion}>
              6
            </span>

            <span className={styles.box} onClick={firstQuestion}>
              7
            </span>

            <span className={styles.box} onClick={firstQuestion}>
              8
            </span>

            <span className={styles.box} onClick={firstQuestion}>
              9
            </span>

            <span className={styles.box} onClick={firstQuestion}>
              10
            </span>
          </Box>
          <Box>
           <Box>
           <ObjectiveQuestions
                numberQuestion={numberQuestion}
                title={title}
                openQuestion={openQuestion}
                numberQuestionObjective={numberQuestionObjective}
                onClose={onClose}
            />
           </Box>
          </Box>
        </Box>
      </Box>
    </Box>
    );
};

export { PageObjectiveQuestionsView };