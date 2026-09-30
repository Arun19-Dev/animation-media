import React, { useEffect, useState } from 'react';
import { getProgress, resetProgress } from '../utils/progressStorage';
import { Award, Target, BookOpen } from 'lucide-react';

const Progress = () => {
  const [progress, setProgress] = useState({});

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset all progress? This cannot be undone.")) {
      resetProgress();
      setProgress({});
    }
  };

  const quizScore = progress.quiz?.score || 0;
  const hasQuiz = !!progress.quiz;

  return (
    <div className="progress-page">
      <h1 className="mb-2">Your Learning Progress</h1>
      <p className="text-muted mb-4">Track your achievements and XP points.</p>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="card text-center text-gradient" style={{ border: '1px solid var(--accent-blue)' }}>
          <Award size={40} className="mb-3" />
          <h3>XP Points</h3>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>{Object.keys(progress).length * 150}</div>
        </div>
        <div className="card text-center text-gradient" style={{ border: '1px solid var(--accent-purple)' }}>
          <BookOpen size={40} className="mb-3" />
          <h3>Modules Started</h3>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>{Object.keys(progress).length}</div>
        </div>
        <div className="card text-center text-gradient" style={{ border: '1px solid var(--accent-cyan)' }}>
          <Target size={40} className="mb-3" />
          <h3>Quiz Score</h3>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
            {hasQuiz ? `${quizScore}/3` : '-'}
          </div>
        </div>
      </div>

      <div className="card mb-4">
        <h3 className="mb-3">Raw Data (LocalStorage)</h3>
        <pre><code>{JSON.stringify(progress, null, 2)}</code></pre>
      </div>

      <button className="btn btn-secondary" onClick={handleReset} style={{ color: 'var(--error)' }}>
        Reset All Progress
      </button>
    </div>
  );
};

export default Progress;
