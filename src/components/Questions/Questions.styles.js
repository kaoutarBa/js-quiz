import styled from 'styled-components';


const QuestionsSection=styled.section`
width: 790px;
height: 375px;
background: #B5EED3;
border-radius:5px;
display: flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
margin:auto;

`;

const Question=styled.div`
width: 700px;
height: 98px;
background: #FFFFFF;
border-radius: 10px;
color:#2c2c2c;
`;
const Choice=styled.div`
width: 653px;
height: 40px;
/* background-color: #FFFFFF;
color:#2c2c2c; */
background-color: ${props=>props.bgColor};
color:${props=>props.color};
border-radius: 5px;
cursor:pointer;
&:hover{
    background: whitesmoke;
    opacity:0.7;
    color:gray;
}

`;
const SubmitBtn=styled.button`
width: 130px;
height: 39px;
border:none;
background: #3BA6C8;
border-radius:5px;
outline:none;
font-size:16px;
font-weight:400;
align-self:flex-end;
color:white;
cursor:pointer;
`;


export{QuestionsSection,Question,Choice,SubmitBtn};