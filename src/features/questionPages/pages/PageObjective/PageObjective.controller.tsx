import { Alert } from "@mui/material";
import { ObjectiveQuestionsData } from "data/ObjectiveQuestionsData";
import React from "react";
import { PageObjectiveQuestionsView } from "./PageObjectiveQuestions.view";

const PageObjectiveQuestions: React.FC = () => {
    const [openQuestion, setOpenQuestion] = React.useState(false);
    const [numberQuestion, setNumberQuestion] = React.useState(' ');
    const [titleQuestion, setTitleQuestion] = React.useState(' ');
    const [numberQuestionId, setNumberQuestionId] = React.useState(Number);

    const questions = ObjectiveQuestionsData ?? [];

    const firstQuestion = () => {
        setOpenQuestion(true);
        setNumberQuestion(questions.q1.numberQuestion);
        setTitleQuestion(questions.q1.title);
        setNumberQuestionId(0);
    };

    const secondQuestion = () => {
        setOpenQuestion(true);
        setNumberQuestion(questions.q2.numberQuestion);
        setTitleQuestion(questions.q2.title);
        setNumberQuestionId(1);
    };

    const thirdQuestion = () => {
        setOpenQuestion(true);
        setNumberQuestion(questions.q3.numberQuestion);
        setTitleQuestion(questions.q3.title);
        setNumberQuestionId(2);
    };

    const fourthQuestion = () => {
        setOpenQuestion(true);
        setNumberQuestion(questions.q4.numberQuestion);
        setTitleQuestion(questions.q4.title);
        setNumberQuestionId(3);
    };

    const fifthQuestion = () => {
        setOpenQuestion(true);
        setNumberQuestion(questions.q5.numberQuestion);
        setTitleQuestion(questions.q5.title);
        setNumberQuestionId(4);
    };

    const sixthQuestion = () => {
        setOpenQuestion(true);
        setNumberQuestion(questions.q6.numberQuestion);
        setTitleQuestion(questions.q6.title);
        setNumberQuestionId(5);
    };

    const sevethQuestion = () => {
        setOpenQuestion(true);
        setNumberQuestion(questions.q7.numberQuestion);
        setTitleQuestion(questions.q7.title);
        setNumberQuestionId(6);
    };

    const eighthQuestion = () => {
        setOpenQuestion(true);
        setNumberQuestion(questions.q8.numberQuestion);
        setTitleQuestion(questions.q8.title);
        setNumberQuestionId(7);
    };

    const ninthQuestion = () => {
        setOpenQuestion(true);
        setNumberQuestion(questions.q9.numberQuestion);
        setTitleQuestion(questions.q9.title);
        setNumberQuestionId(8);
    };

    const tenthQuestion = () => {
        setOpenQuestion(true);
        setNumberQuestion(questions.q10.numberQuestion);
        setTitleQuestion(questions.q10.title);
        setNumberQuestionId(9);
    };

    const onCloseQuestion = () => {
        setOpenQuestion(false);
    };

    return(
        <div>
            <PageObjectiveQuestionsView
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
                numberQuestion={numberQuestion}
                title={titleQuestion}
                openQuestion={openQuestion}
                onClose={onCloseQuestion}
                numberQuestionObjective={numberQuestionId}
            />
        </div>
    );
};

export { PageObjectiveQuestions };