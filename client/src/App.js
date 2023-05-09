import Auth from "./componentes/Auth/Auth";
import Home from "./componentes/home/Home";
import Navbar from "./componentes/navbar/Navbar";
import PostDetail from "./componentes/postDetails/PostDetail";
import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <Container maxWidth="xl">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/posts" />} />  
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
