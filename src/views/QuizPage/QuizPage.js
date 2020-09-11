import React,{useState}  from 'react';
import ProgressBar from 'components/ProgressBar';
import Questions from 'components/Questions';
import {Container} from './QuizPage.styles';
import questions from './questions.json';

const QuizPage=({setResult})=>{
    const[currentQuestion,setCurrentQuestion]=useState(1);

    return(
    <Container>
        <div>{currentQuestion}/{Object.keys(questions).length}</div>
        <ProgressBar  currentQuestion={currentQuestion}
        questions={questions}/>
        <Questions setResult={setResult} 
        questions={questions}
        setCurrentQuestion={setCurrentQuestion}
        currentQuestion={currentQuestion}/>
    </Container>
    );

};

export default QuizPage;