import React,{useState} from 'react';
import {QuestionsSection,Question,Choice,SubmitBtn} from './Questions.styles';
import { Route, Redirect } from "react-router-dom";


const Questions=({currentQuestion,setCurrentQuestion,setResult,questions})=>{
    
    const[userAnswer,setUserAnswer]=useState("");
    const[colors,setColors]=useState([["#FFFFFF","#2c2c2c"],["#FFFFFF","#2c2c2c"],["#FFFFFF","#2c2c2c"]]);

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
    const handleAnswering=(choice,choiceIndex)=>{
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
        (currentQuestion!==Object.keys(questions).length)?
            (Object.keys(questions).filter(q=>q.slice(1)===""+currentQuestion)
            .map(q=>{
                return(
                    <QuestionsSection key={q[1]}>
                        <Question>{questions[q].question}</Question>
                        {questions[q].choices.map((ch,index)=>{
                            return(
                                    <Choice key={index} bgColor={colors[index][0]} color={colors[index][1]}  
                                    onClick={(e)=>handleAnswering(ch.right,index)}>{ch.choice}</Choice>
                                    );
                            })}
                        <SubmitBtn onClick={handleSubmit}>Submit</SubmitBtn>
                    </QuestionsSection>
                    );
                })
            ):(
            <Route exact path="/quiz">
                <Redirect to="/result" /> 
            </Route>));
};

export default Questions;