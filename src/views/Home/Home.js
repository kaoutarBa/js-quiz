import React from 'react';
import question from 'assets/question.svg';
import {Img,H1} from './Home.styles';
const Home=()=>{
    return(
        <div>
            <Img src={question} alt={"question"}/>
          <H1>Quiz App</H1> 
        </div>
    );

};

export default Home;