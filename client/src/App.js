import React from 'react';
import {Container} from '@material-ui/core';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Auth from './componentes/Auth/Auth';
import Home from './componentes/home/Home';
import Navbar from './componentes/navbar/Navbar';

const App = () => {
  return (
    <Container maxWidth="lg">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />;
        </Routes>
      </Router>
    </Container>
  );
};
 export default App
