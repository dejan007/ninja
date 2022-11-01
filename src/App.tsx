import React from 'react';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import CreatePostForm from './pages/CreatePostForm';
import EditPostForm from './pages/EditPostForm';
import Posts from './pages/Posts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/create-post" element={<CreatePostForm />} />
        <Route path="/edit-post/:id" element={<EditPostForm />} />
      </Routes>
    </Router>
  );
}

export default App;
