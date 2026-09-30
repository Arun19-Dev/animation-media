import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import MediaQueries from './pages/MediaQueries';
import AnimationStudio from './pages/AnimationStudio';
import Challenges from './pages/Challenges';
import Quiz from './pages/Quiz';
import Progress from './pages/Progress';
import FinalProject from './pages/FinalProject';

import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <div className="content-inner">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/media-queries" element={<MediaQueries />} />
              <Route path="/animation-studio" element={<AnimationStudio />} />
              <Route path="/challenges" element={<Challenges />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/final-project" element={<FinalProject />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
