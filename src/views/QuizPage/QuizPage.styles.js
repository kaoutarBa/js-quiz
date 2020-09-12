import styled from 'styled-components';

const Container=styled.div`
height:70vh;
width:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around;
`;
const CurrentQuestion=styled.div`
color: #9D9696;
font-size:16px;
`;
const QuestionInfo=styled.div`
margin-top:10px;
display:flex;
justify-content:space-around;
width: 650px;

`;

export{Container,CurrentQuestion,QuestionInfo};