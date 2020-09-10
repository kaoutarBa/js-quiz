import styled from 'styled-components';
import { Link } from "react-router-dom";

const Container=styled.div`
height:95vh;
width:100%;
display:grid;
grid-template-columns:50% 5% 35% 10%;
grid-template-rows:15% 45% 25% 15%;
`;
const Img=styled.img`
height:400px;
grid-column:1/2;
grid-row:2/4;
`;

const Title=styled.div`
font-size:50px;
font-weight:500;
color:#00BFA6;
`;
const P=styled.div`
padding-left:10px;
padding-top:5px;
`;

const Section=styled.section`
grid-column:2/4;
grid-row:2/3;
align-self:center;
justify-self:start;

`;

const StartBtn=styled.button`
align-self:start;
justify-self:center;
grid-column:3/4;
grid-row:3/4;
border:2px solid  #00BFA6;
height:40px;
width:170px;
color:#00BFA6;
border-radius:11px;
font-size:23px;
font-weight:500;
cursor:pointer;
outline:none;
background:white;
&:hover{
    background:#00BFA6;
    color:white;
    border:none;
}
`;
const CustomLInk=styled(Link)`
text-decoration:none;
color:inherit;



`;


export {Img,P,Title,Container,StartBtn,Section,CustomLInk};