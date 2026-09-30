import React, { useState } from 'react';
import LivePreview from '../components/LivePreview';

const MediaQueries = () => {
  // Lesson 1 State
  const [l1Width, setL1Width] = useState(800);
  const [l1Bp, setL1Bp] = useState(600);
  const [l1HeadingBase, setL1HeadingBase] = useState(40);
  const [l1HeadingSmall, setL1HeadingSmall] = useState(24);

  // Lesson 2 State
  const [l2Width, setL2Width] = useState(500);
  const l2Bp = 768;

  // Lesson 3 State
  const [l3Width, setL3Width] = useState(500);
  const l3Bp = 600;

  // Lesson 4 State
  const [l4Width, setL4Width] = useState(600);
  
  // Lesson 5 State
  const [l5Width, setL5Width] = useState(1024);
  const l5Presets = [
    { label: 'Mobile', width: 375 },
    { label: 'Tablet', width: 768 },
    { label: 'Laptop', width: 1024 },
    { label: 'Desktop', width: 1440 }
  ];

  const l5Html = `
    <nav class="navbar">Logo <span>Menu</span></nav>
    <div class="hero"><h1>Responsive Layout</h1></div>
    <div class="cards">
      <div class="card">Card 1</div>
      <div class="card">Card 2</div>
      <div class="card">Card 3</div>
      <div class="card">Card 4</div>
    </div>
  `;
  const l5Css = `
    .navbar { background: #333; color: white; padding: 1rem; display: flex; justify-content: space-between; }
    .hero { background: #0ea5e9; color: white; padding: 2rem; text-align: center; }
    .cards { display: grid; gap: 1rem; padding: 1rem; grid-template-columns: 1fr; }
    .card { background: #f1f5f9; padding: 1.5rem; text-align: center; border: 1px solid #cbd5e1; }
    
    @media (min-width: 600px) {
      .cards { grid-template-columns: 1fr 1fr; }
    }
    @media (min-width: 900px) {
      .cards { grid-template-columns: 1fr 1fr 1fr 1fr; }
      .hero { padding: 4rem; }
    }
  `;

  return (
    <div className="media-queries-page">
      <h1 className="mb-2">CSS Media Queries</h1>
      <p className="text-muted mb-4">Learn how to adapt layouts to different screen sizes.</p>

      {/* Lesson 1 */}
      <section className="card mb-4">
        <h2>1. What is a Media Query?</h2>
        <p className="mb-3">
          A media query applies CSS styles when specified conditions about the viewport, device, or user preferences are satisfied.
          It makes a website "smart" by changing its layout to fit a phone, tablet, or desktop.
        </p>
        
        <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <h4>CSS Code</h4>
            <pre className="mb-3"><code>{`h1 {
  font-size: ${l1HeadingBase}px;
}

@media (max-width: ${l1Bp}px) {
  h1 {
    font-size: ${l1HeadingSmall}px;
  }
}`}</code></pre>
            <div className="controls">
              <label className="d-flex justify-content-between mb-1">
                <span>Viewport Width: {l1Width}px</span>
              </label>
              <input type="range" className="form-range mb-3" min="320" max="1000" value={l1Width} onChange={e => setL1Width(e.target.value)} />
              
              <label className="d-flex justify-content-between mb-1">
                <span>Breakpoint (max-width): {l1Bp}px</span>
              </label>
              <input type="range" className="form-range mb-3" min="400" max="900" value={l1Bp} onChange={e => setL1Bp(e.target.value)} />
            </div>
          </div>
          <div>
            <h4>Live Preview</h4>
            <div style={{ position: 'relative' }}>
              <LivePreview 
                width={`${l1Width}px`}
                height="200px"
                html={`<h1>Heading Size Demo</h1><p>Resize the viewport to see the heading change size.</p>`}
                css={`h1 { font-size: ${l1HeadingBase}px; color: #000; margin-top: 0; transition: font-size 0.3s; } @media (max-width: ${l1Bp}px) { h1 { font-size: ${l1HeadingSmall}px; color: #0ea5e9; } } p { color: #333; }`}
              />
              <div className="text-center mt-2">
                <span className={`badge ${l1Width <= l1Bp ? 'bg-success' : 'bg-secondary'}`} style={{ padding: '4px 8px', borderRadius: '4px', background: l1Width <= l1Bp ? 'var(--success)' : '#475569' }}>
                  Condition: {l1Width <= l1Bp ? 'True (Applied)' : 'False (Ignored)'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lesson 2 */}
      <section className="card mb-4">
        <h2>2. min-width Explained</h2>
        <p className="mb-3"><code>min-width</code> means the viewport must be <strong>at least</strong> the specified width for the rules to apply. Think of it as "this width and larger".</p>
        
        <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <pre className="mb-3"><code>{`@media (min-width: 768px) {
  .box {
    background: #10b981;
    border-radius: 50%;
  }
}`}</code></pre>
            <input type="range" className="form-range mt-4 mb-2" min="320" max="1200" value={l2Width} onChange={e => setL2Width(e.target.value)} />
            <div className="d-flex justify-content-between">
              <span>Current: {l2Width}px</span>
              <span>Breakpoint: {l2Bp}px</span>
            </div>
          </div>
          <div>
            <LivePreview 
              width={`${l2Width}px`}
              height="150px"
              html={`<div class="box"></div>`}
              css={`
                .box { width: 100px; height: 100px; background: #ef4444; margin: 0 auto; transition: all 0.5s; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; }
                .box::after { content: "Default"; }
                @media (min-width: 768px) {
                  .box { background: #10b981; border-radius: 50%; }
                  .box::after { content: "min-width matched!"; }
                }
              `}
            />
            <div className="mt-3 text-center" style={{ color: l2Width >= l2Bp ? 'var(--success)' : 'var(--error)' }}>
              Condition is {l2Width >= l2Bp ? 'TRUE (≥ 768px)' : 'FALSE (< 768px)'}
            </div>
          </div>
        </div>
      </section>

      {/* Lesson 3 */}
      <section className="card mb-4">
        <h2>3. max-width Explained</h2>
        <p className="mb-3"><code>max-width</code> means the viewport must be <strong>no wider than</strong> the specified value. Think of it as "up to this width".</p>
        
        <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <pre className="mb-3"><code>{`@media (max-width: 600px) {
  .container {
    flex-direction: column;
  }
}`}</code></pre>
            <input type="range" className="form-range mt-4 mb-2" min="320" max="1000" value={l3Width} onChange={e => setL3Width(e.target.value)} />
            <div className="d-flex justify-content-between">
              <span>Current: {l3Width}px</span>
              <span>Breakpoint: {l3Bp}px</span>
            </div>
          </div>
          <div>
            <LivePreview 
              width={`${l3Width}px`}
              height="150px"
              html={`<div class="container"><div class="item">1</div><div class="item">2</div></div>`}
              css={`
                .container { display: flex; gap: 10px; flex-direction: row; transition: flex-direction 0.3s; }
                .item { flex: 1; background: #8b5cf6; padding: 20px; color: white; text-align: center; }
                @media (max-width: 600px) {
                  .container { flex-direction: column; }
                  .item { background: #f59e0b; }
                }
              `}
            />
            <div className="mt-3 text-center" style={{ color: l3Width <= l3Bp ? 'var(--success)' : 'var(--error)' }}>
              Condition is {l3Width <= l3Bp ? 'TRUE (≤ 600px)' : 'FALSE (> 600px)'}
            </div>
          </div>
        </div>
      </section>

      {/* Lesson 4 */}
      <section className="card mb-4">
        <h2>4. min-width versus max-width</h2>
        <p className="mb-3">At exactly the boundary (600px), both conditions might be true. The outcome depends on CSS specificity and source order!</p>
        
        <div className="mb-3">
          <input type="range" className="form-range" min="300" max="900" value={l4Width} onChange={e => setL4Width(e.target.value)} />
          <div className="text-center mt-2"><strong>Viewport: {l4Width}px</strong></div>
        </div>

        <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div style={{ padding: '1rem', border: `2px solid ${l4Width <= 600 ? '#10b981' : '#ef4444'}`, borderRadius: '8px' }}>
            <h4 className="mb-2">Card A: max-width</h4>
            <pre><code>{`@media (max-width: 600px) {
  body { background: lightblue; }
}`}</code></pre>
            <div className="mt-2 text-center">{l4Width <= 600 ? '✅ MATCHES (<= 600px)' : '❌ NO MATCH'}</div>
          </div>
          
          <div style={{ padding: '1rem', border: `2px solid ${l4Width >= 600 ? '#10b981' : '#ef4444'}`, borderRadius: '8px' }}>
            <h4 className="mb-2">Card B: min-width</h4>
            <pre><code>{`@media (min-width: 600px) {
  body { background: lightgreen; }
}`}</code></pre>
            <div className="mt-2 text-center">{l4Width >= 600 ? '✅ MATCHES (>= 600px)' : '❌ NO MATCH'}</div>
          </div>
        </div>
        
        {l4Width == 600 && (
          <div className="mt-3 p-3 text-center" style={{ background: 'rgba(245, 158, 11, 0.2)', color: 'var(--warning)', borderRadius: '8px' }}>
            <strong>Both match at exactly 600px!</strong> The rule appearing last in the CSS file will override the other.
          </div>
        )}
      </section>

      {/* Lesson 5 */}
      <section className="card mb-4">
        <h2>5. Breakpoints and Responsive Layouts</h2>
        <p className="mb-3">Common breakpoints often align with device sizes, but it's best to add breakpoints when the design breaks, not just for specific devices.</p>
        
        <div className="mb-3 d-flex gap-2 justify-content-center">
          {l5Presets.map(preset => (
            <button 
              key={preset.label} 
              className={`btn ${l5Width == preset.width ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setL5Width(preset.width)}
            >
              {preset.label} ({preset.width}px)
            </button>
          ))}
        </div>
        
        <input type="range" className="form-range mb-3" min="300" max="1500" value={l5Width} onChange={e => setL5Width(e.target.value)} />
        <div className="text-center mb-3">Custom Width: {l5Width}px</div>

        <LivePreview 
          width={`${l5Width}px`}
          height="350px"
          html={l5Html}
          css={l5Css}
        />
      </section>

      {/* Playground Prompt */}
      <section className="card text-center mb-4" style={{ background: 'linear-gradient(135deg, var(--bg-card), rgba(14, 165, 233, 0.1))' }}>
        <h2>Ready to experiment?</h2>
        <p className="mb-3">Try the fully interactive Media Query Playground!</p>
        {/* We can build a dedicated playground page or link to one. For now, it's just text. */}
      </section>

    </div>
  );
};

export default MediaQueries;
