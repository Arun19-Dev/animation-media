import React, { useState } from 'react';

const AnimationStudio = () => {
  // Studio State
  const [duration, setDuration] = useState(2);
  const [delay, setDelay] = useState(0);
  const [rotation, setRotation] = useState(360);
  const [scale, setScale] = useState(1.5);
  const [translateX, setTranslateX] = useState(100);
  const [timingFunc, setTimingFunc] = useState('ease-in-out');
  const [direction, setDirection] = useState('alternate');
  const [iteration, setIteration] = useState('infinite');
  
  const [playing, setPlaying] = useState(true);

  // Timing function comparison state
  const [comparePlaying, setComparePlaying] = useState(false);

  const resetStudio = () => {
    setDuration(2);
    setDelay(0);
    setRotation(360);
    setScale(1.5);
    setTranslateX(100);
    setTimingFunc('ease-in-out');
    setDirection('alternate');
    setIteration('infinite');
  };

  const dynamicCSS = `
    @keyframes studioAnim {
      0% {
        transform: translate(0px, 0px) rotate(0deg) scale(1);
      }
      100% {
        transform: translate(${translateX}px, 0px) rotate(${rotation}deg) scale(${scale});
      }
    }
    
    .studio-element {
      width: 100px;
      height: 100px;
      background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
      border-radius: 16px;
      margin: 50px auto;
      animation-name: studioAnim;
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
      animation-timing-function: ${timingFunc};
      animation-direction: ${direction};
      animation-iteration-count: ${iteration};
      animation-play-state: ${playing ? 'running' : 'paused'};
    }
  `;

  return (
    <div className="animation-studio-page">
      <style>{dynamicCSS}</style>
      <h1 className="mb-2">CSS Animations</h1>
      <p className="text-muted mb-4">Master @keyframes and bring your UI to life.</p>

      {/* Lesson 1 & 2 */}
      <section className="card mb-4">
        <h2>1. Understanding @keyframes</h2>
        <p className="mb-3"><code>@keyframes</code> define the stages of an animation. Percentages represent progress through the animation's active duration.</p>
        
        <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <pre><code>{`@keyframes rotateBox {
  0% { rotate: 0deg; }
  50% { rotate: 90deg; }
  100% { rotate: 180deg; }
}`}</code></pre>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', background: 'rgba(0,0,0,0.2)', borderRadius: '8px' }}>
            <div style={{ 
              width: '80px', height: '80px', background: '#0ea5e9', 
              animation: 'rotateBox 3s infinite linear' 
            }}></div>
            <style>{`
              @keyframes rotateBox {
                0% { transform: rotate(0deg); }
                50% { transform: rotate(90deg); }
                100% { transform: rotate(180deg); }
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* Lesson 6: Timing functions */}
      <section className="card mb-4">
        <h2>2. Timing Functions</h2>
        <p className="mb-3">The timing function affects the rate of progress between animation keyframes.</p>
        
        <button className="btn btn-primary mb-4" onClick={() => {
          setComparePlaying(false);
          setTimeout(() => setComparePlaying(true), 50);
        }}>
          Play Comparison
        </button>

        <div className="timing-comparison" style={{ padding: '1rem', background: '#0f172a', borderRadius: '8px' }}>
          {['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out'].map(tf => (
            <div key={tf} className="mb-3 d-flex align-items-center gap-3">
              <span style={{ width: '100px', fontFamily: 'monospace' }}>{tf}</span>
              <div style={{ flex: 1, background: '#1e293b', height: '40px', borderRadius: '20px', position: 'relative' }}>
                <div style={{ 
                  width: '40px', height: '40px', background: '#8b5cf6', borderRadius: '50%',
                  animation: comparePlaying ? `moveRight 2s ${tf} forwards` : 'none'
                }}></div>
              </div>
            </div>
          ))}
          <style>{`
            @keyframes moveRight {
              from { transform: translateX(0); }
              to { transform: translateX(calc(100% - 40px)); }
            }
          `}</style>
        </div>
      </section>

      {/* Animation Studio Editor */}
      <section className="card mb-4" style={{ border: '1px solid var(--accent-cyan)' }}>
        <h2 className="text-gradient mb-4">Animation Studio</h2>
        
        <div className="grid" style={{ gridTemplateColumns: '1fr 350px', gap: '2rem' }}>
          
          <div className="studio-preview" style={{ background: '#0f172a', borderRadius: '12px', padding: '2rem', minHeight: '400px', display: 'flex', flexDirection: 'column' }}>
            <div className="studio-controls mb-4 d-flex justify-content-center gap-2">
              <button className="btn btn-primary" onClick={() => setPlaying(!playing)}>{playing ? 'Pause' : 'Play'}</button>
              <button className="btn btn-secondary" onClick={() => {
                setPlaying(false);
                setTimeout(() => setPlaying(true), 50);
              }}>Restart</button>
              <button className="btn btn-secondary" onClick={resetStudio}>Reset</button>
            </div>
            
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', overflow: 'hidden', position: 'relative' }}>
              <div className="studio-element"></div>
            </div>
            
            <div className="mt-4">
              <h4>Generated CSS</h4>
              <pre style={{ fontSize: '0.85rem' }}><code>{`.element {
  animation: studioAnim ${duration}s ${timingFunc} ${delay}s ${iteration} ${direction};
}

@keyframes studioAnim {
  0% { transform: translate(0px) rotate(0deg) scale(1); }
  100% { transform: translate(${translateX}px) rotate(${rotation}deg) scale(${scale}); }
}`}</code></pre>
            </div>
          </div>
          
          <div className="studio-sidebar" style={{ maxHeight: '600px', overflowY: 'auto', paddingRight: '10px' }}>
            <h4 className="mb-3">Properties</h4>
            
            <div className="mb-3">
              <label className="d-flex justify-content-between mb-1">
                <span>Duration (s)</span> <span>{duration}s</span>
              </label>
              <input type="range" className="form-range" min="0.5" max="10" step="0.5" value={duration} onChange={e => setDuration(e.target.value)} />
            </div>
            
            <div className="mb-3">
              <label className="d-flex justify-content-between mb-1">
                <span>Delay (s)</span> <span>{delay}s</span>
              </label>
              <input type="range" className="form-range" min="0" max="5" step="0.5" value={delay} onChange={e => setDelay(e.target.value)} />
            </div>

            <h4 className="mt-4 mb-3">Transforms (100% Keyframe)</h4>

            <div className="mb-3">
              <label className="d-flex justify-content-between mb-1">
                <span>Rotation (deg)</span> <span>{rotation}°</span>
              </label>
              <input type="range" className="form-range" min="-360" max="720" value={rotation} onChange={e => setRotation(e.target.value)} />
            </div>

            <div className="mb-3">
              <label className="d-flex justify-content-between mb-1">
                <span>Scale</span> <span>{scale}</span>
              </label>
              <input type="range" className="form-range" min="0" max="3" step="0.1" value={scale} onChange={e => setScale(e.target.value)} />
            </div>
            
            <div className="mb-3">
              <label className="d-flex justify-content-between mb-1">
                <span>Translate X (px)</span> <span>{translateX}px</span>
              </label>
              <input type="range" className="form-range" min="-200" max="400" value={translateX} onChange={e => setTranslateX(e.target.value)} />
            </div>

            <h4 className="mt-4 mb-3">Settings</h4>

            <div className="mb-3">
              <label className="mb-1 d-block">Timing Function</label>
              <select className="form-control" value={timingFunc} onChange={e => setTimingFunc(e.target.value)}>
                <option value="linear">linear</option>
                <option value="ease">ease</option>
                <option value="ease-in">ease-in</option>
                <option value="ease-out">ease-out</option>
                <option value="ease-in-out">ease-in-out</option>
                <option value="cubic-bezier(0.68, -0.55, 0.265, 1.55)">bouncy (cubic-bezier)</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="mb-1 d-block">Direction</label>
              <select className="form-control" value={direction} onChange={e => setDirection(e.target.value)}>
                <option value="normal">normal</option>
                <option value="reverse">reverse</option>
                <option value="alternate">alternate</option>
                <option value="alternate-reverse">alternate-reverse</option>
              </select>
            </div>
            
            <div className="mb-3">
              <label className="mb-1 d-block">Iteration Count</label>
              <select className="form-control" value={iteration} onChange={e => setIteration(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="infinite">infinite</option>
              </select>
            </div>

          </div>
        </div>
      </section>
      
    </div>
  );
};

export default AnimationStudio;
