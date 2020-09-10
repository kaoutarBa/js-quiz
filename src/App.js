import React from 'react';
import Home from './views/Home';
import { BrowserRouter,Route, Switch } from "react-router-dom";
import QuizPage from './views/QuizPage';
import Result from './views/Result';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/quiz"} exact component={QuizPage}/>
        <Route path={"/result"} exact component={Result}/>
      </Switch>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
