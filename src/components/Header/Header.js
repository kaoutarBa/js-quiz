import React from 'react';
import {Title,Container,GetMore} from './Header.styles';

const Header=()=>{
    return(
        <Container>
            <Title>JavaScript Quiz</Title> 
            <GetMore>Get More</GetMore>
        </Container>
   );
};

export default Header;