import React,{useState} from 'react';
import {QuestionsSection,Question,Choice,SubmitBtn} from './Questions.styles';
import questions from './questions.json';


const Questions=()=>{
    const[currentQuestion,setCurrentQuestion]=useState(1);
    const[result,setResult]=useState(0);
    const[userAnswer,setUserAnswer]=useState("");
    const[colors,setColors]=useState([["#FFFFFF","#2c2c2c"],["#FFFFFF","#2c2c2c"],["#FFFFFF","#2c2c2c"]]);
    console.log(result);

    const handleSubmit=()=>{
        setCurrentQuestion(prev=>prev+1);
        if(userAnswer){
            setResult(res=>res+1);
        }
        setColors([
            ["#FFFFFF","#2c2c2c"],
            ["#FFFFFF","#2c2c2c"],
            ["#FFFFFF","#2c2c2c"]]);
    };
    const handleAnswering=(e,choice,choiceIndex)=>{
        const newColors=colors.map((colorSet,index)=>{
                if(choiceIndex===index){
                    colorSet=["green","white"];
                }
                else{
                    colorSet=["#FFFFFF","#2c2c2c"];
                }
                return colorSet;
            });
        setColors(newColors);
        setUserAnswer(choice);
    };
    return(
            Object.keys(questions).filter(q=>q[1]===""+currentQuestion).map(q=>{
            return(
            <QuestionsSection key={q[1]}>
                <Question>{questions[q].question}</Question>
                {questions[q].choices.map((ch,index)=>{
                    return(
                        <Choice key={index} bgColor={colors[index][0]} color={colors[index][1]}  
                        onClick={(e)=>handleAnswering(e,ch.right,index)}>{ch.choice}</Choice>
                    );
                })}
                <SubmitBtn onClick={handleSubmit}>Submit</SubmitBtn>
            </QuestionsSection>
            );
        })
    );
}

export default Questions;