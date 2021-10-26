import styled from 'styled-components';
import resultBg from 'assets/resultBg.svg';


const Container=styled.div`
height:70vh;
width:100%;
background-image: url(${resultBg});
background-repeat: no-repeat;
display:grid;
grid-template-rows:15% 75%;
grid-template-columns:15% 70% 15%;
`;
const ResultSection=styled.div`
width: 546px;
height: 292px;
background: rgba(0, 191, 166, 0.17);
border-radius: 10px;
display:flex;
grid-column:2/3;
grid-row:2/3;
justify-self:center;
align-self:center;
`;
const YouGot=styled.div`
margin:auto;
font-size: 31px;
font-weight:500;
color: #095066;
`;

const Button=styled.button`
width: 88px;
height: 36px;
border:none;
background: #3BA6C8;
border-radius: 5px;
outline:none;
&:hover{
    opacity:0.9;
}
`;
const YourResult=styled.div`
width: 232px;
height: 53px;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 35px;
color: #095066;
grid-column:1/2;
grid-row:1/2;
display:flex;
justify-content:flex-end;
`;
const A=styled.a`
font-size: 16px;
color: #FFFFFF;
text-decoration:none;
`;
const ButtonsSection=styled.div`
height:200px;
grid-column:3/4;
grid-row:2/3;
display:flex;
flex-direction:column;
justify-content:space-around;

`;

export {ResultSection,Container,YouGot,Button,YourResult,A,ButtonsSection};
