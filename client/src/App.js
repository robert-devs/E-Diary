import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';  // Update import to use Navigate instead of redirect

import Auth from './componentes/Auth/Auth';
import Home from './componentes/home/Home';
import Navbar from './componentes/navbar/Navbar';
import PostDetail from './componentes/postDetails/PostDetail';

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <Container maxWidth="xl">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/posts" />} />  {/* Update to use Navigate */}
          <Route path="/posts" element={<Home />} />
          <Route path="/posts/search" element={<Home />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/auth" element={<Auth />}/>
         <Route path="/auth" element={user?.user ? <Auth /> : <Navigate to="/posts" />} />
        </Routes>
      </Router>
    </Container>
  );
};

export default App;
