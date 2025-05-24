'use client';

import { useState } from 'react';

export default function Home() {
  const [noCount, setNoCount] = useState(0);
  const [yesClicked, setYesClicked] = useState(false);

  const handleNoClick = () => {
    setNoCount(prev => prev + 1);
  };

  const handleYesClick = () => {
    setYesClicked(true);
  };

  const yesScale = 1 + noCount * 0.2;
  const noScale = Math.max(1 - noCount * 0.15, 0.2);
  const hideNoButton = noCount >= 6;

  const mainStyle = {
    backgroundColor: 'black',
    color: 'white',
    minHeight: '100vh',
    textAlign: 'center' as const,
    paddingTop: '100px',
    fontFamily: 'sans-serif',
  };

  const buttonBase = {
    padding: '10px 20px',
    margin: '10px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const yesButtonStyle = {
    ...buttonBase,
    backgroundColor: 'green',
    color: 'white',
    transform: `scale(${yesScale})`,
  };

  const noButtonStyle = {
    ...buttonBase,
    backgroundColor: 'red',
    color: 'white',
    transform: `scale(${noScale})`,
    display: hideNoButton ? 'none' : 'inline-block',
  };

  return (
    <main style={mainStyle}>
      {!yesClicked ? (
        <>
          <h1 style={{ fontSize: '28px' }}>Sen Alpe'ye SBS misin</h1>
          <div>
            <button onClick={handleYesClick} style={yesButtonStyle}>Evet</button>
            <button onClick={handleNoClick} style={noButtonStyle}>Hayır</button>
          </div>
        </>
      ) : (
        <>
          <img
            src="/063b9661c3b6fkel.jpg"
            alt="SBS"
            style={{
              width: '200px',
              height: 'auto',
              display: 'block',
              margin: '0 auto 20px',
              borderRadius: '12px',
            }}
          />
          <h1 style={{ fontSize: '30px' }}>
            Al işteeeeeptğepteğptğpt biliyordum gitttttt SBS 
          </h1>
        </>
      )}
    </main>
  );
}
