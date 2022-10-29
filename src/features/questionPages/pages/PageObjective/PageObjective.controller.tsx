import { Alert } from "@mui/material";
import { ObjectiveQuestions } from "data/ObjectiveQuestions";
import React from "react";
import { PageObjectiveQuestionsView } from "./PageObjectiveQuestions.view";

const PageObjectiveQuestions: React.FC = () => {
    const [openQuestion, setOpenQuestion] = React.useState(false);
    const [numberQuestion, setNumberQuestion] = React.useState(' ');
    const [titleQuestion, setTitleQuestion] = React.useState(' ');

    const questions = ObjectiveQuestions ?? [];

    const firstQuestion = () => {
        setOpenQuestion(true);
        setNumberQuestion(questions.q1.numberQuestion);
        setTitleQuestion(questions.q1.title);
    };

    const onCloseQuestion = () => {
        setOpenQuestion(false);
    };

    const checkingQuestion = () => {
        {questions.q1.alternatives.map((alternatives) => (
            console.log(alternatives.answer)
        ))}
    }

    const showAlternatives = () => {
        {questions.q1.alternatives.map((alternatives) => (
            <div>{alternatives.answer}</div>
        ))}
    }

    return(
        <div>
            <PageObjectiveQuestionsView
                firstQuestion={firstQuestion}
                numberQuestion={numberQuestion}
                title={titleQuestion}
                answer={showAlternatives}
                openQuestion={openQuestion}
                onClose={onCloseQuestion}
                onClick={checkingQuestion}
            />
        </div>
    );
};

export { PageObjectiveQuestions };