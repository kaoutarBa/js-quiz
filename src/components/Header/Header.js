import React from 'react';
import {Title,Container,GetMore} from './Header.styles';

const Header=()=>{
    return(
        <Container>
            <Title>Quiz App</Title> 
            <GetMore>Get More</GetMore>
        </Container>
   );
};

export default Header;