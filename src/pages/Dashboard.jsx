import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle, Clock, CheckCircle } from 'lucide-react';
import '../styles/Dashboard.css';
import { getProgress } from '../utils/progressStorage';

const modules = [
  {
    id: 'media-queries',
    title: 'CSS Media Queries',
    description: 'Learn how to make responsive layouts with breakpoints, min-width, and max-width.',
    time: '45 min',
    path: '/media-queries',
    icon: '📱'
  },
  {
    id: 'animations',
    title: 'CSS Animations',
    description: 'Master @keyframes, timing functions, and transform properties to bring your UI to life.',
    time: '60 min',
    path: '/animation-studio',
    icon: '✨'
  },
  {
    id: 'challenges',
    title: 'Coding Challenges',
    description: 'Test your skills with interactive coding exercises from beginner to advanced.',
    time: '120 min',
    path: '/challenges',
    icon: '🎯'
  },
  {
    id: 'quiz',
    title: 'CSS Quiz',
    description: 'Verify your knowledge of responsive design and CSS animation theory.',
    time: '20 min',
    path: '/quiz',
    icon: '📝'
  },
  {
    id: 'final-project',
    title: 'Final Project',
    description: 'Build your own responsive motion website using all the concepts you learned.',
    time: '90 min',
    path: '/final-project',
    icon: '🚀'
  }
];

const Dashboard = () => {
  const [progress, setProgress] = useState({});

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  return (
    <div className="dashboard">
      <header className="dashboard-header mb-4">
        <h1 className="text-gradient">Welcome to CSS Interactive Learning Lab</h1>
        <p className="subtitle text-muted">
          Understand CSS by changing it, breaking it, and rebuilding it.
        </p>
      </header>

      <section className="roadmap mb-4 card">
        <h3>Learning Roadmap</h3>
        <div className="roadmap-steps mt-4">
          <div className="step">
            <div className="step-circle">1</div>
            <span>Learn Concepts</span>
          </div>
          <div className="step-line"></div>
          <div className="step">
            <div className="step-circle">2</div>
            <span>Explore Examples</span>
          </div>
          <div className="step-line"></div>
          <div className="step">
            <div className="step-circle">3</div>
            <span>Experiment</span>
          </div>
          <div className="step-line"></div>
          <div className="step">
            <div className="step-circle">4</div>
            <span>Solve Challenges</span>
          </div>
          <div className="step-line"></div>
          <div className="step">
            <div className="step-circle">5</div>
            <span>Build Project</span>
          </div>
        </div>
      </section>

      <h3 className="mb-3">Learning Modules</h3>
      <div className="modules-grid grid">
        {modules.map((mod) => (
          <div key={mod.id} className="card module-card">
            <div className="module-icon">{mod.icon}</div>
            <h4>{mod.title}</h4>
            <p className="text-muted mb-3">{mod.description}</p>
            
            <div className="module-meta d-flex justify-content-between align-items-center mb-3 text-muted">
              <span className="d-flex align-items-center gap-2">
                <Clock size={16} /> {mod.time}
              </span>
              {progress[mod.id]?.completed && (
                <span className="d-flex align-items-center gap-2 text-success" style={{ color: 'var(--success)' }}>
                  <CheckCircle size={16} /> Completed
                </span>
              )}
            </div>
            
            <Link to={mod.path} className="btn btn-primary w-100">
              <PlayCircle size={18} /> Start Learning
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
