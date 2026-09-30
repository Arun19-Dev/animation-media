import React, { useRef, useEffect } from 'react';

const LivePreview = ({ html, css, width = '100%', height = '300px' }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (iframeRef.current) {
      const doc = iframeRef.current.contentDocument;
      if (doc) {
        doc.open();
        doc.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { margin: 0; padding: 16px; font-family: system-ui, sans-serif; transition: all 0.3s; }
                * { box-sizing: border-box; }
                ${css}
              </style>
            </head>
            <body>
              ${html}
            </body>
          </html>
        `);
        doc.close();
      }
    }
  }, [html, css]);

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', background: '#0f172a', padding: '1rem', borderRadius: '8px', overflow: 'hidden' }}>
      <iframe
        ref={iframeRef}
        title="Live Preview"
        style={{
          width: width,
          height: height,
          border: '1px solid #334155',
          borderRadius: '4px',
          background: '#ffffff',
          transition: 'width 0.3s ease',
        }}
        sandbox="allow-same-origin"
      />
    </div>
  );
};

export default LivePreview;
