import React from "react";
import Home from "./components/Home";
import Main from "./components/main/Main";
import store from "./redux";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <Main />} />
          <Route exact path="/:name" component={() => <Home />} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
