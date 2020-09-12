import React, {Suspense} from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import logo from './logo.svg';


import './App.css';

const Home= React.lazy(()=>import("./Pages/Home/Home"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div></div>}>
      <div id="app">
      <div id= "main-page">
        <Switch>
          <Route exact path="/" component={Home}/> 
        </Switch>
      </div>
      </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
