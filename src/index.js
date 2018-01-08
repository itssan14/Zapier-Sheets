import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "normalize-css";
import NotFound from "./components/NotFound";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact={true} />
      {/* <Route path="/search" component={ResultsPage} /> */}
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<Router />, document.getElementById("root"));
registerServiceWorker();
