import React from 'react';
import {Container} from '@material-ui/core';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import NavBar from './componentes/Navbar/Navbar';
import Home from './componentes/home/Home';
import Auth from './componentes/Auth/Auth';

const App = () => {
  return (
    <BrowserRouter>
      <Container max-width="lg">
        <NavBar />
        <Switch>
          <Route path="/" exact Component={Home} />
          <Route path="/auth" exact Component={Auth} />
        </Switch>
        <Home />
      </Container>
    </BrowserRouter>
  );
};

export default App;
