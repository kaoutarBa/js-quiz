import React,{useState} from 'react';
import {QuestionsSection,Question,Choice,SubmitBtn} from './Questions.styles';
import questions from './questions.json';


const Questions=()=>{
    const[currentQuestion,setCurrentQuestion]=useState(1);
    const[result,setResult]=useState(0);
    const[userAnswer,setUserAnswer]=useState("");
console.log(result);
    const handleSubmit=()=>{
        setCurrentQuestion(prev=>prev+1);
        if(userAnswer){
            setResult(res=>res+1);
        }
    };
    const handleAnswering=(e,choice)=>{
        if(e.target.style.backgroundColor==="green"){
            e.target.style.backgroundColor="#FFFFFF";
            e.target.style.color="#2c2c2c";
            setUserAnswer("");

        }
        else{
            e.target.style.backgroundColor="green";
            e.target.style.color="white";
            setUserAnswer(choice);
        }

    };
    return(
            Object.keys(questions).filter(q=>q[1]===""+currentQuestion).map(q=>{
            return(
            <QuestionsSection key={q[1]}>
                <Question>{questions[q].question}</Question>
                {questions[q].choices.map((ch,index)=>{
                    return(
                        <Choice key={index} onClick={(e)=>handleAnswering(e,ch.right)}>{ch.choice}</Choice>
                    );
                })}
                <SubmitBtn onClick={handleSubmit}>Submit</SubmitBtn>
            </QuestionsSection>
            );
        })
    );
}

export default Questions;