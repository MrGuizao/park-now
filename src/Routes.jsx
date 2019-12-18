import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import Navigation from "./components/nav/Navigation";

export default function Routes() {
     return (
          <BrowserRouter>
               <Switch>
                    <Route path="/" exact component={Homepage} />
                    <Route path="/login" component={Navigation} />
               </Switch>
          </BrowserRouter>
     );
}
