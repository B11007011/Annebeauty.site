import React from 'react';

const LoadingBar = ({ isLoading }) => {
  if (!isLoading) return null;
  
  return (
    <>
      <div className="loading-bar">
        <div className="progress"></div>
      </div>

      <style>{`
        .loading-bar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: rgba(255, 255, 255, 0.1);
          z-index: 9999;
        }

        .progress {
          height: 100%;
          width: 0%;
          background: #ff69b4;
          animation: loading 1s infinite ease-in-out;
        }

        @keyframes loading {
          0% {
            width: 0%;
            margin-left: 0%;
          }
          50% {
            width: 30%;
            margin-left: 70%;
          }
          100% {
            width: 0%;
            margin-left: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default LoadingBar; 