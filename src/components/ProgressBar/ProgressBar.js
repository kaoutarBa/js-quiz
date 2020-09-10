import React from 'react';
import {ProgBarContainer,DynamicProgBar} from './ProgressBar.styles';


const ProgressBar=()=>{
    return(
        <ProgBarContainer>
            <DynamicProgBar width={"70%"}/>
        </ProgBarContainer>
        
    )
}

export default ProgressBar;