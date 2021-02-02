import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Login from "./Components/Login";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
