import React from "react";
import { PageOneView } from "./PageOne.view";
import { DiscursiveQuestions } from "data/DiscursiveQuestions";

const PageOne: React.FC = () => {
  const [openQuestion, setOpenQuestion] = React.useState(false);
  const [numberQuestion, setNumberQuestion] = React.useState(' ');
  const [titleQuestion, setTitleQuestion] = React.useState(' ');
  const [answerQuestion, setAnswerQuestion] = React.useState(' ');
  const questions = DiscursiveQuestions;

  const firstQuestion = () => {
    setOpenQuestion(true);
    setNumberQuestion(questions.q1.numberQuestion);
    setTitleQuestion(questions.q1.title);
    setAnswerQuestion(questions.q1.answer);
  };

  const secondQuestion = () => {
    setOpenQuestion(true);
    setNumberQuestion(questions.q2.numberQuestion);
    setTitleQuestion(questions.q2.title);
    setAnswerQuestion(questions.q2.answer);
  };

  const thirdQuestion = () => {
    setOpenQuestion(true);
    setNumberQuestion(questions.q3.numberQuestion);
    setTitleQuestion(questions.q3.title);
    setAnswerQuestion(questions.q3.answer);
  };

  const fourthQuestion = () => {
    setOpenQuestion(true);
    setNumberQuestion(questions.q4.numberQuestion);
    setTitleQuestion(questions.q4.title);
    setAnswerQuestion(questions.q4.answer);
  };

  const fifthQuestion = () => {
    setOpenQuestion(true);
    setNumberQuestion(questions.q5.numberQuestion);
    setTitleQuestion(questions.q5.title);
    setAnswerQuestion(questions.q5.answer);
  };

  const sixthQuestion = () => {
    setOpenQuestion(true);
    setNumberQuestion(questions.q6.numberQuestion);
    setTitleQuestion(questions.q6.title);
    setAnswerQuestion(questions.q6.answer);
  };

  const sevethQuestion = () => {
    setOpenQuestion(true);
    setNumberQuestion(questions.q7.numberQuestion);
    setTitleQuestion(questions.q7.title);
    setAnswerQuestion(questions.q7.answer);
  };

  const eighthQuestion = () => {
    setOpenQuestion(true);
    setNumberQuestion(questions.q8.numberQuestion);
    setTitleQuestion(questions.q8.title);
    setAnswerQuestion(questions.q8.answer);
  };

  const ninthQuestion = () => {
    setOpenQuestion(true);
    setNumberQuestion(questions.q9.numberQuestion);
    setTitleQuestion(questions.q9.title);
    setAnswerQuestion(questions.q9.answer);
  };

  const tenthQuestion = () => {
    setOpenQuestion(true);
    setNumberQuestion(questions.q10.numberQuestion);
    setTitleQuestion(questions.q10.title);
    setAnswerQuestion(questions.q10.answer);
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
      title={titleQuestion}
      answer={answerQuestion}
    />
  );
};

export { PageOne };