import styled from 'styled-components';

const ProgBarContainer=styled.div`
width: 678px;
height: 33px;
background: #dcecf1;
border:1px solid #3BA6C8;
border-radius:1px;
`;

const DynamicProgBar=styled.div`
width: ${props=>props.width};
height: 100%;
background-color: #3BA6C8;
border-radius:1px;

`;


export {ProgBarContainer,DynamicProgBar};