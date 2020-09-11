import React,{useState} from 'react';
import {QuestionsSection,Question,Choice,SubmitBtn} from './Questions.styles';
import questions from './questions.json';


const Questions=()=>{
    const[currentQuestion,setCurrentQuestion]=useState(1);
    const handleClick=()=>{
        setCurrentQuestion(prev=>prev+1);
    };
    return(
            Object.keys(questions).filter(q=>q[1]===""+currentQuestion).map(q=>{
            return(
            <QuestionsSection>
                <Question>{questions[q].question}</Question>
                {questions[q].choices.map(ch=>{
                    return(
                        <Choice>{ch.choice}</Choice>
                    );
                })}
                <SubmitBtn onClick={handleClick}>Submit</SubmitBtn>
            </QuestionsSection>
            );
        })
    );
}

export default Questions;