import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import TacherList from "./pages/TacherList";
import TacherForm from "./pages/TacherForm";

const Routes = () => (
  <BrowserRouter>
    <Route path="/" exact component={Landing} />
    <Route path="/study" component={TacherList} />
    <Route path="/give-classes" component={TacherForm} />
  </BrowserRouter>
);

export default Routes;
