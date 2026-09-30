import React, { useState } from 'react';
import LivePreview from '../components/LivePreview';

const challengesData = [
  {
    id: 1,
    level: 'Beginner',
    title: 'Mobile Background Change',
    objective: 'Change the background color to lightblue when the screen width is 600px or less.',
    startCode: `.box {\n  width: 100%;\n  height: 200px;\n  background: lightgreen;\n}\n\n/* Add your media query below */\n`,
    html: `<div class="box"></div>`,
    check: (css) => {
      const minified = css.replace(/\\s+/g, '').toLowerCase();
      return minified.includes('@media(max-width:600px)') && minified.includes('background:lightblue');
    },
    hint: 'Use @media (max-width: 600px) and change the .box background.'
  },
  {
    id: 2,
    level: 'Beginner',
    title: 'Continuously Rotating Square',
    objective: 'Make the square rotate 360 degrees continuously over 2 seconds.',
    startCode: `.square {\n  width: 100px;\n  height: 100px;\n  background: #8b5cf6;\n  margin: 50px auto;\n  /* Add animation property here */\n\n}\n\n/* Add @keyframes spin here */\n`,
    html: `<div class="square"></div>`,
    check: (css) => {
      const minified = css.replace(/\\s+/g, '').toLowerCase();
      return minified.includes('@keyframes') && minified.includes('360deg') && minified.includes('infinite');
    },
    hint: 'Define @keyframes spin { to { transform: rotate(360deg); } } and add animation: spin 2s linear infinite; to .square.'
  }
];

const Challenges = () => {
  const [activeChallenge, setActiveChallenge] = useState(0);
  const [code, setCode] = useState(challengesData[0].startCode);
  const [status, setStatus] = useState(null); // 'success', 'error', null
  const [showHint, setShowHint] = useState(false);

  const challenge = challengesData[activeChallenge];

  const handleSelect = (idx) => {
    setActiveChallenge(idx);
    setCode(challengesData[idx].startCode);
    setStatus(null);
    setShowHint(false);
  };

  const checkAnswer = () => {
    if (challenge.check(code)) {
      setStatus('success');
    } else {
      setStatus('error');
    }
  };

  return (
    <div className="challenges-page">
      <h1 className="mb-2">Interactive Coding Challenges</h1>
      <p className="text-muted mb-4">Write real CSS to solve problems and see the results instantly.</p>

      <div className="d-flex gap-2 mb-4 overflow-auto">
        {challengesData.map((c, idx) => (
          <button 
            key={c.id} 
            className={`btn ${activeChallenge === idx ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => handleSelect(idx)}
          >
            {c.level}: {c.title}
          </button>
        ))}
      </div>

      <div className="card" style={{ borderTop: `4px solid var(--accent-cyan)` }}>
        <h3 className="mb-2">{challenge.title}</h3>
        <p className="mb-4"><strong>Objective:</strong> {challenge.objective}</p>

        <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div className="editor-panel">
            <h4 className="mb-2">CSS Editor</h4>
            <textarea 
              value={code}
              onChange={(e) => setCode(e.target.value)}
              style={{
                width: '100%',
                height: '300px',
                background: '#0f172a',
                color: '#e2e8f0',
                fontFamily: 'monospace',
                padding: '1rem',
                border: '1px solid #334155',
                borderRadius: '8px',
                outline: 'none',
                resize: 'none'
              }}
              spellCheck="false"
            />
            
            <div className="mt-3 d-flex justify-content-between align-items-center">
              <button className="btn btn-secondary" onClick={() => setShowHint(!showHint)}>
                {showHint ? 'Hide Hint' : 'Show Hint'}
              </button>
              <button className="btn btn-primary" onClick={checkAnswer}>Check Answer</button>
            </div>
            
            {showHint && <div className="mt-3 p-3 bg-dark text-muted" style={{ borderRadius: '8px', border: '1px solid #334155' }}>
              <strong>Hint:</strong> {challenge.hint}
            </div>}

            {status === 'success' && (
              <div className="mt-3 p-3 text-center" style={{ background: 'rgba(16, 185, 129, 0.2)', color: 'var(--success)', borderRadius: '8px' }}>
                🎉 Correct! Great job solving this challenge.
              </div>
            )}
            
            {status === 'error' && (
              <div className="mt-3 p-3 text-center" style={{ background: 'rgba(239, 68, 68, 0.2)', color: 'var(--error)', borderRadius: '8px' }}>
                ❌ Not quite right. Keep experimenting or check the hint.
              </div>
            )}

          </div>

          <div className="preview-panel">
            <h4 className="mb-2">Live Result</h4>
            <LivePreview html={challenge.html} css={code} height="300px" />
            <p className="text-muted mt-2 text-center" style={{ fontSize: '0.85rem' }}>
              The preview updates immediately, but you must click "Check Answer" to verify your code.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
