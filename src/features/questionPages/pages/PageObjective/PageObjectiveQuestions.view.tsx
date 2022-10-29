import React from "react";
import { Box } from "@mui/material";
import { useStyles } from "./PageObjectiveQuestions.style";
import { ObjectiveQuestions } from "components/ObjectiveQuestions";

interface PageObjectiveQuestionsViewProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  firstQuestion: VoidFunction;
  numberQuestion: string;
  title: string;
  answer: any;
  openQuestion: boolean;
  onClose: (value: boolean) => void;
}

const PageObjectiveQuestionsView: React.FC<PageObjectiveQuestionsViewProps> = ({
  onClick,
  firstQuestion,
  numberQuestion,
  title,
  answer,
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
                answer={answer}
                openQuestion={openQuestion}
                onClose={onClose}
                onClick={onClick}
            />
           </Box>
          </Box>
        </Box>
      </Box>
    </Box>
    );
};

export { PageObjectiveQuestionsView };