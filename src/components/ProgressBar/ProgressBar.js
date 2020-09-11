import React from 'react';
import {ProgBarContainer,DynamicProgBar} from './ProgressBar.styles';


const ProgressBar=({currentQuestion,questions})=>{
    let width=(currentQuestion/Object.keys(questions).length)*100;
    return(
        <ProgBarContainer>
            <DynamicProgBar width={`${width}%`}/>
        </ProgBarContainer>
        
    )
}

export default ProgressBar;