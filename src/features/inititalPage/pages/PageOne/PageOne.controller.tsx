import React from "react";
import { PageOneView } from "./PageOne.view";

const PageOne: React.FC = () => {
  const [openQuestion, setOpenQuestion] = React.useState(false);

  const firstQuestion = () => {
    setOpenQuestion(true);
  };

  const secondQuestion = () => {
    setOpenQuestion(true);
  };

  const thirdQuestion = () => {
    setOpenQuestion(true);
  };

  const fourthQuestion = () => {
    setOpenQuestion(true);
  };

  const fifthQuestion = () => {
    setOpenQuestion(true);
  };

  const sixthQuestion = () => {
    setOpenQuestion(true);
  };

  const sevethQuestion = () => {
    setOpenQuestion(true);
  };

  const eighthQuestion = () => {
    setOpenQuestion(true);
  };

  const ninthQuestion = () => {
    setOpenQuestion(true);
  };

  const tenthQuestion = () => {
    setOpenQuestion(true);
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
    />
  );
};

export { PageOne };