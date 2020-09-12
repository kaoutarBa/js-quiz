import React from 'react';
import {ResultSection,YouGot,Button,Container,YourResult,A,ButtonsSection,ShareButton} from './Result.styles';

const Result=({result})=>{
    const handleClick=()=>{
        alert('https://quiz-app-ba.herokuapp.com ');

    };
    return(
    <Container>
     <YourResult>Your Result</YourResult>   
    <ResultSection>
       <YouGot>You Got {Math.floor((result/15)*100)}% !
       </YouGot> 
    </ResultSection>
    <ButtonsSection>
    <Button type="button" >
    <A href={"/"}> Home</A>
    </Button>
    <Button type="button"><A href={"/quiz"}> Redo Quiz</A></Button>
    <ShareButton type="button" onClick={handleClick}>
        Share
    </ShareButton>
    </ButtonsSection>
   
    </Container>    
    
    );

};

export default Result;