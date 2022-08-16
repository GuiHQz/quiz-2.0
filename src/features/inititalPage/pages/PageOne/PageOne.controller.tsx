import React from "react";
import { PageOneView } from "./PageOne.view";

const PageOne: React.FC = () => {
  const [openQuestion, setOpenQuestion] = React.useState(false);

  const firstQuestion = () => {
    setOpenQuestion(true);
  };

  const secondQuestion = () => {};

  const thirdQuestion = () => {};

  const fourthQuestion = () => {};

  const fifthQuestion = () => {};

  const sixthQuestion = () => {};

  const sevethQuestion = () => {};

  const eighthQuestion = () => {};

  const ninthQuestion = () => {};

  const tenthQuestion = () => {};

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