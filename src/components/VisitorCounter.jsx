import React, { useEffect } from 'react';

const VisitorCounter = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `
      var _Hasync= _Hasync|| [];
      _Hasync.push(['Histats.start', '1,YOUR_SITE_ID_HERE,4,0,0,0,00010000']);
      _Hasync.push(['Histats.fasi', '1']);
      _Hasync.push(['Histats.track_hits', '']);
      (function() {
        var hs = document.createElement('script'); 
        hs.type = 'text/javascript'; 
        hs.async = true;
        hs.src = ('//s10.histats.com/js15_as.js');
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
      })();
    `;

    // Append script to document
    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="visitor-counter">
      {/* Histats counter */}
      <div id="histats_counter"></div>
      <style jsx>{`
        .visitor-counter {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.9);
          padding: 5px;
          border-radius: 4px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
      `}</style>
    </div>
  );
};

export default VisitorCounter; 