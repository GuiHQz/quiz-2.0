import React from "react";
import { PageOneView } from "./PageOne.view";
import { DiscursiveQuestions } from "data/DiscursiveQuestions";

const PageOne: React.FC = () => {
  const [openQuestion, setOpenQuestion] = React.useState(false);
  const [numberQuestion, setNumberQuestion] = React.useState(' ');
  const questions = DiscursiveQuestions;

  const firstQuestion = () => {
    setOpenQuestion(true);
    setNumberQuestion(questions.q1.numberQuestion);
  };

  const secondQuestion = () => {
    setOpenQuestion(true);
    setNumberQuestion(questions.q2.numberQuestion);
  };

  const thirdQuestion = () => {
    setOpenQuestion(true);
    setNumberQuestion(questions.q3.numberQuestion);
  };

  const fourthQuestion = () => {
    setOpenQuestion(true);
    setNumberQuestion(questions.q4.numberQuestion);
  };

  const fifthQuestion = () => {
    setOpenQuestion(true);
    setNumberQuestion(questions.q5.numberQuestion);
  };

  const sixthQuestion = () => {
    setOpenQuestion(true);
    setNumberQuestion(questions.q6.numberQuestion);
  };

  const sevethQuestion = () => {
    setOpenQuestion(true);
    setNumberQuestion(questions.q7.numberQuestion);
  };

  const eighthQuestion = () => {
    setOpenQuestion(true);
    setNumberQuestion(questions.q8.numberQuestion);
  };

  const ninthQuestion = () => {
    setOpenQuestion(true);
    setNumberQuestion(questions.q9.numberQuestion);
  };

  const tenthQuestion = () => {
    setOpenQuestion(true);
    setNumberQuestion(questions.q10.numberQuestion);
  };

  const onCloseQuestion = () => {
    setOpenQuestion(false);
  };

  return (
    <PageOneView
      firstQuestion={firstQuestion}
      secondQuestion={secondQuestion}
      thirdQuestion={thirdQuestion}
      fourthQuestion={fourthQuestion}
      fifthQuestion={fifthQuestion}
      sixthQuestion={sixthQuestion}
      sevethQuestion={sevethQuestion}
      eighthQuestion={eighthQuestion}
      ninthQuestion={ninthQuestion}
      tenthQuestion={tenthQuestion}
      openQuestion={openQuestion}
      onClose={onCloseQuestion}
      numberQuestion={numberQuestion}
    />
  );
};

export { PageOne };