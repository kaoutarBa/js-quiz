import React from 'react';
import {ResultSection,YouGot,Button,Container,YourResult,A,ButtonsSection} from './Result.styles';

const Result=({result})=>{
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
    <Button type="button">
        <A href={"javascript:alert('https://quiz-app-ba.herokuapp.com ');"}>Share</A>
    </Button>
    </ButtonsSection>
   
    </Container>    
    
    );

};

export default Result;