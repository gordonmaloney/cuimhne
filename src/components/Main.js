import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Memory } from "./Memory";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ChangeLevels } from "./changeLevels";

export const Main = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Memory />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
};
