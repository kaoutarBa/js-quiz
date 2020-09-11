import React from 'react';
import {Container,
    PoweredBy,
    GithubCredit,
    GmailCredit,
    LinkedInCredit,
    A} from './Footer.styles';
import githubIcon from 'assets/githubIcon.svg';
import gmailIcon from 'assets/gmailIcon.svg';
import linkedInIcon from 'assets/linkedInIcon.svg';
const Footer=()=>{
    return(
    <Container>
        <PoweredBy>powered by @kaoutarBa</PoweredBy>
        <GithubCredit> 
            <img src ={githubIcon} alt={"githubIcon"}/>
            <A href={"https://github.com/kaoutarBa"}  target="_blank">/kaoutarBa</A>
        </GithubCredit>
        <GmailCredit>
            <img src ={gmailIcon} alt={"gmailIcon"}/>  
            <A href={"mailto:baldi.kaoutar.ma@gmail.com"}  target="_blank">baldi.kaoutar.ma</A>
        </GmailCredit>
        <LinkedInCredit>
            <img src ={linkedInIcon} alt={"linkedInIcon"}/> 
            <A href={"https://www.linkedin.com/in/kaoutarba/"}  target="_blank">/in/kaoutarba/</A>
        </LinkedInCredit>

    </Container>
        
    )
}

export default Footer;