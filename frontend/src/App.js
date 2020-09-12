import React, { Suspense } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

// import logo from './logo.svg';
import { StoreProvider, createStore } from "easy-peasy";
import model from "./models/index";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const store = createStore(model);

const Home = React.lazy(() => import("./Pages/Home/Home"));

function App() {
  return (
    <BrowserRouter>
      <StoreProvider store={store}>
        <Suspense fallback={<div></div>}>
          <div id="app">
            <div id="main-page">
              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
            </div>
          </div>
        </Suspense>
      </StoreProvider>
    </BrowserRouter>
  );
}

export default App;
