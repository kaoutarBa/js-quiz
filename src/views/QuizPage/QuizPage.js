import React from 'react';
import ProgressBar from 'components/ProgressBar';
import Questions from 'components/Questions';
import {Container} from './QuizPage.styles';
const QuizPage=()=>{
    return(
    <Container>
        <ProgressBar />
        <Questions/>
    </Container>
    );

};

export default QuizPage;