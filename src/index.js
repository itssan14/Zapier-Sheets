import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "normalize-css";
import NotFound from "./components/NotFound";
import App from "./App";
import Login from "./components/LoginPage";
import TableNames from "./components/TableNames";
import registerServiceWorker from "./registerServiceWorker";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Login} exact={true} />
      <Route path="/tables" component={TableNames} />
      <Route path="/form" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<Router />, document.getElementById("root"));
registerServiceWorker();
