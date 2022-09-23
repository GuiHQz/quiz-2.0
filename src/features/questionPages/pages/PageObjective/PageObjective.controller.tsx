import { ObjectiveQuestions } from "data/ObjectiveQuestions";
import React from "react";
import { PageObjectiveQuestionsView } from "./PageObjectiveQuestions.view";

const PageObjectiveQuestions: React.FC = () => {
    const [openQuestion, setOpenQuestion] = React.useState(false);
    const [isCorrectQuestion, setIsCorrectQuestion] = React.useState(' ');

    //Faz parte das propriedades de textos questões do Popup
    const [numberQuestion, setNumberQuestion] = React.useState(' ');
    const [titleQuestion, setTitleQuestion] = React.useState(' ');
    const [alternativeOne, setAlternativeOne] = React.useState(' ');
    const [alternativeTwo, setAlternativeTwo] = React.useState(' ');
    const [alternativeThree, setAlternativeThree] = React.useState(' ');
    const [alternativeFour, setAlternativeFour] = React.useState(' ');
    //------------------------------------------------------

    const questions = ObjectiveQuestions;

    const onClickAnswer = () => {
        
    }

    const firstQuestion = () => {
        setOpenQuestion(true);
        setNumberQuestion(questions.q1.numberQuestion);
        setTitleQuestion(questions.q1.title);
        setAlternativeOne(questions.q1.alternatives.alternativeOne);
        setAlternativeTwo(questions.q1.alternatives.alternativeTwo);
        setAlternativeThree(questions.q1.alternatives.alternativeThree);
        setAlternativeFour(questions.q1.alternatives.alternativeFour);
    };

    const onCloseQuestion = () => {
        setOpenQuestion(false);
      };

    return(
        <div>
            <PageObjectiveQuestionsView
                firstQuestion={firstQuestion}
                numberQuestion={numberQuestion}
                title={titleQuestion}
                alternativeOne={alternativeOne}
                alternativeTwo={alternativeTwo}
                alternativeThree={alternativeThree}
                alternativeFour={alternativeFour}
                openQuestion={openQuestion}
                onClose={onCloseQuestion}
            />
        </div>
    );
};

export { PageObjectiveQuestions };