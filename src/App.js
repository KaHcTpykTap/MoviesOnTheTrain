import React from 'react';

import {Route, Switch} from "react-router-dom";
import {create, details, edit, home} from "./utils/constant";
import Home from "./components/home/Home";
import Details from "./components/details/Details";
import Create from "./components/create/Create";
import Edit from "./components/edit/Edit";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
      <>
        <Switch>
          <Route exact path={['/', `${home}`]}>
            <Home/>
          </Route>
          <Route path={details}>
            <Details/>
          </Route>
          <Route path={create}>
            <Create/>
          </Route>
          <Route path={edit}>
            <Edit/>
          </Route>
        </Switch>
      </>
  );
};

export default App;