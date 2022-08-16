import React from "react";
import { Box } from "@mui/material";
import { useStyles } from "./PageOne.style";
import { DiscursiveQuestions } from "components/DiscursiveQuestions";

interface PageOneProps {
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
  openQuestion: boolean
  onClose: (value: boolean) => void
}

const PageOneView: React.FC<PageOneProps> = ({
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
  openQuestion,
  onClose,
}) => {
  const styles = useStyles();

  return (
    <Box className={styles.background}>
      {/* <Box className={styles.header}>Questões - Quiz</Box> */}

      <Box className={styles.questions}>
        <Box>
          <Box className={styles.boxesRow}>
            <span className={styles.box} onClick={firstQuestion}>
              1
            </span>

            <span className={styles.box} onClick={secondQuestion}>
              2
            </span>

            <span className={styles.box} onClick={thirdQuestion}>
              3
            </span>

            <span className={styles.box} onClick={fourthQuestion}>
              4
            </span>

            <span className={styles.box} onClick={fifthQuestion}>
              5
            </span>
          </Box>
          <Box className={styles.boxesRow}>
            <span className={styles.box} onClick={sixthQuestion}>
              6
            </span>

            <span className={styles.box} onClick={sevethQuestion}>
              7
            </span>

            <span className={styles.box} onClick={eighthQuestion}>
              8
            </span>

            <span className={styles.box} onClick={ninthQuestion}>
              9
            </span>

            <span className={styles.box} onClick={tenthQuestion}>
              10
            </span>
          </Box>
          <Box>
            <DiscursiveQuestions 
                openQuestion={openQuestion}
                onClose={onClose}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { PageOneView };
