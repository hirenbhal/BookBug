import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Homepage from "./Components/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Homepage} />
    </BrowserRouter>
  );
}

export default App;
