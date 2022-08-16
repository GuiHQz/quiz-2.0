import React from "react";
import { Drawer, Box, Button } from "@mui/material";
import { useStyles } from "./DiscrusiveQuestions.style";

interface DiscursiveQuestionsProps {
  openQuestion: boolean
  onClose: (value: boolean) => void
}

const DiscursiveQuestions: React.FC<DiscursiveQuestionsProps> = ({
  openQuestion,
  onClose,
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
          <Box>
            <Button
              onClick={onCloseQuestion}
              className={styles.closeButton}>Fechar</Button>
          </Box>
        </Box>
      </Drawer>
    </React.Fragment>
  );
};

export { DiscursiveQuestions };