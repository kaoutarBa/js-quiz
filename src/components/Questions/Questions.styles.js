import styled from 'styled-components';


const QuestionsSection=styled.section`
width: 670px;
height: 340px;
background: rgba(0, 191, 166, 0.5);
border-radius: 10px;
display: flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
box-shadow: 2px 1px 5px #dedede;
`;

const Question=styled.div`
width: 630px;
height: 75px;
background: #F1FFC8;
border-radius: 10px;
display:flex;
margin-top:20px;
margin-bottom:20px;
border:1px solid #B4BEBE;
`;
const Content=styled.div`
color:#095066;
font-size:17px;
font-weight:600;
margin:auto;
`;

const Choice=styled.div`
width: 550px;
height: 45px;
background-color: ${props=>props.bgColor};
color:${props=>props.color};
border-radius: 10px;
cursor:pointer;
border:1px solid #B4BEBE;
display:flex;
`;
const ChoiceContent=styled.div`
background-color: inherit;
color:inherit;
justify-content:space-around;
margin:auto;
`;
const SubmitBtn=styled.button`
width: 130px;
height: 40px;
border:none;
background: #3BA6C8;
border-radius:10px;
outline:none;
font-size:18px;
font-weight:500;
align-self:flex-end;
color:white;
cursor:pointer;
margin-right:10px;
`;


export{QuestionsSection,Question,Choice,SubmitBtn,Content,ChoiceContent};