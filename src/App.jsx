import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Editor from './components/Editor';
import Notes from './pages/Notes';
import Folders from './pages/Folders'; 

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Editor />} />
          <Route path="/folders" element={<Folders />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

