import React,{useState}  from 'react';
import Home from 'views/Home';
import { BrowserRouter,Route, Switch } from "react-router-dom";
import QuizPage from 'views/QuizPage';
import Result from 'views/Result';
import Header from 'components/Header';
import Footer from 'components/Footer';
import {Container} from './AppViews.styles';

const AppViews=()=>{
    const[result,setResult]=useState(0);
    return(
        <Container>
            <Header/>
            
        <BrowserRouter>
            <Switch>
                <Route path={"/"} exact component={Home} />
                <Route path={"/quiz"} exact >
                    <QuizPage setResult={setResult}/>
                </Route>
                <Route path={"/result"} exact>
                    <Result result={result}/>
                </Route>
            </Switch>
        </BrowserRouter>
        <Footer/>
        </Container>
        
    )
}

export default AppViews;