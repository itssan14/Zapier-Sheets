import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import App from "./App";
import "typeface-roboto";
import registerServiceWorker from "./registerServiceWorker";

//Routing Setup
const nomatch = () => (
  <div>
    <center>
      <b style={{ fontSize: "50px" }}>404 Not Found!</b>
    </center>
  </div>
);
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact={true} />
      {/* <Route path="/search" component={ResultsPage} /> */}
      <Route component={nomatch} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<Router />, document.getElementById("root"));
registerServiceWorker();
