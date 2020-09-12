import styled from 'styled-components';


const Container=styled.div`
position:fixed;
bottom:0px;
width: 100%;
height: 80px;
border-top: 1px solid #E5E5E5;
display:grid;
grid-template-columns:40% 20% 40%;
grid-template-rows:60% 40%;
`;
const A=styled.a`
font-size:12px;
color: #AAA3A3;
text-decoration:none;
`;
const PoweredBy=styled.div`
grid-column:2/3;
grid-row:1/2;
font-size:13px;
color: #AAA3A3;
margin-top:3px;
justify-self:center;
`;
const GithubCredit=styled.div`
grid-column:1/2;
grid-row:2/3;
justify-self:end;
display:flex;
align-items:center;
width:80px;
justify-content:space-around;
`;
const GmailCredit=styled.div`
grid-column:2/3;
grid-row:2/3;
justify-self:center;
display:flex;
align-items:center;
width:115px;
justify-content:space-around;
`;
const LinkedInCredit=styled.div`
grid-column:3/4;
grid-row:2/3;
justify-self:start;
display:flex;
align-items:center;
width:100px;
justify-content:space-around;
`;


export {Container,PoweredBy,GithubCredit,GmailCredit,LinkedInCredit,A};