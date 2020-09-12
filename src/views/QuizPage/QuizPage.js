import React,{useState}  from 'react';
import ProgressBar from 'components/ProgressBar';
import Questions from 'components/Questions';
import {Container,CurrentQuestion,QuestionInfo} from './QuizPage.styles';
import questions from './questions.json';

const QuizPage=({setResult})=>{
    const[currentQuestion,setCurrentQuestion]=useState(1);

    return(
    <Container>
        <QuestionInfo>
            <CurrentQuestion>
                Question {currentQuestion}/{Object.keys(questions).length}
            </CurrentQuestion>
            <ProgressBar  currentQuestion={currentQuestion}
            questions={questions}/>
        </QuestionInfo>
        <Questions setResult={setResult} 
        questions={questions}
        setCurrentQuestion={setCurrentQuestion}
        currentQuestion={currentQuestion}/>
    </Container>
    );

};

export default QuizPage;