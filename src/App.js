import React,{useState} from 'react';
import Home from './views/Home';
import { BrowserRouter,Route, Switch } from "react-router-dom";
import QuizPage from './views/QuizPage';
import Result from './views/Result';

function App() {
  const[result,setResult]=useState(0);

  return (
    <div className="App">
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
    
    </div>
  );
}

export default App;
