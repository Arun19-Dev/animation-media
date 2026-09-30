import React, { useState } from 'react';
import LivePreview from '../components/LivePreview';

const FinalProject = () => {
  const [html, setHtml] = useState(`<nav class="nav">
  <div class="logo">MotionApp</div>
  <div class="links">Menu</div>
</nav>

<header class="hero">
  <h1 class="headline">Animate Your Ideas</h1>
  <button class="cta">Get Started</button>
</header>

<section class="features">
  <div class="card">Fast</div>
  <div class="card">Responsive</div>
  <div class="card">Beautiful</div>
</section>`);

  const [css, setCss] = useState(`/* Write your CSS here */
body { margin: 0; font-family: sans-serif; background: #0f172a; color: white; }

.nav { padding: 1rem; background: #1e293b; display: flex; justify-content: space-between; }
.hero { padding: 4rem 1rem; text-align: center; }
.features { display: flex; flex-direction: column; gap: 1rem; padding: 1rem; }
.card { background: #334155; padding: 2rem; border-radius: 8px; text-align: center; }

/* Add media queries and animations below! */
`);

  const [previewWidth, setPreviewWidth] = useState(1024);

  return (
    <div className="final-project-page">
      <h1 className="mb-2">Final Challenge: Motion Website</h1>
      <p className="text-muted mb-4">Combine Media Queries and Animations to build a landing page.</p>

      <div className="card mb-4" style={{ background: 'linear-gradient(to right, rgba(14, 165, 233, 0.1), rgba(139, 92, 246, 0.1))' }}>
        <h3 className="mb-2">Requirements:</h3>
        <ul style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}>
          <li>A responsive navigation bar and hero section</li>
          <li>Animated headline and call-to-action (CTA) button</li>
          <li>Three feature cards (stack on mobile, side-by-side on desktop)</li>
          <li>At least 3 responsive layout rules (media queries)</li>
          <li>At least 3 keyframe stages in an animation</li>
          <li>Different animation settings for mobile vs desktop</li>
          <li>Use <code>@media (prefers-reduced-motion: reduce)</code> to disable animations</li>
        </ul>
      </div>

      <div className="grid mb-4" style={{ gridTemplateColumns: '1fr', gap: '1rem' }}>
        <div className="editor-panels grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <h4>HTML</h4>
            <textarea 
              value={html}
              onChange={e => setHtml(e.target.value)}
              style={{ width: '100%', height: '250px', background: '#0f172a', color: '#e2e8f0', padding: '1rem', fontFamily: 'monospace', border: '1px solid #334155', borderRadius: '8px' }}
            />
          </div>
          <div>
            <h4>CSS</h4>
            <textarea 
              value={css}
              onChange={e => setCss(e.target.value)}
              style={{ width: '100%', height: '250px', background: '#0f172a', color: '#e2e8f0', padding: '1rem', fontFamily: 'monospace', border: '1px solid #334155', borderRadius: '8px' }}
            />
          </div>
        </div>
      </div>

      <div className="preview-container card">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4>Live Preview</h4>
          <div className="d-flex align-items-center gap-3">
            <span>{previewWidth}px</span>
            <input type="range" className="form-range" min="320" max="1400" value={previewWidth} onChange={e => setPreviewWidth(e.target.value)} style={{ width: '200px' }} />
          </div>
        </div>
        
        <LivePreview html={html} css={css} width={`${previewWidth}px`} height="400px" />
      </div>
    </div>
  );
};

export default FinalProject;
