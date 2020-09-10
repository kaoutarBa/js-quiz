import React from 'react';
import question from 'assets/question.svg';
import {Img,P,Title,Container,StartBtn,Section} from './Home.styles';

const Home=()=>{
    return(
    <Container>
        <Img src={question} alt={"question"}/>
        <Section>
            <Title>Quiz App</Title>
            <P>  Test Your Knowledge!</P>
        </Section>
        <StartBtn type={"button"}>Start</StartBtn>
    </Container>
    );

};

export default Home;