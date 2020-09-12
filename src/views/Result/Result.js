import React from 'react';


const Result=({result})=>{
    return(
    <div>
        You Got {Math.floor((result/15)*100)}% !
    </div>
    );

};

export default Result;