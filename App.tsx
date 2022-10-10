import * as React from 'react';
import { useEffect, useRef, useState } from 'react'; //
import Cactus from './cactus';
import Dino from './dino';
import './style.css';

export default function App() {
  const [jump, setJump] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const dinoTop = useRef(150);

  useEffect(() => {
    window.addEventListener('keypress', handleKeyDown);
  }, []);

  const handleKeyDown = (event) => {
    console.log(event.key);
    if (event.key === 'Space') {
      setJump(true);
    }
  };
  
  const isAlive = (cactusLeft) => {
    if (cactusLeft < 50) {
      console.log('cactusLeft', cactusLeft);
    }
    if (
      cactusLeft < 50 &&
      cactusLeft > 0 &&
      dinoTop.current >= 140 &&
      !gameOver
    ) {
      // collision
      console.log('Game Over!');
      setGameOver(true);
    }
  };

  const reset = () => {
    setGameOver(false);
    setJump(false);
  };

  return (
    <div>
      <div
        className="game"
        onClick={() => {
          setJump(true);
        }}
      >
        {/* <div id="dino"></div> */}
        <Dino
          isJumping={jump}
          dinoJumpCallback={() => {
            setJump(false);
          }}
          dinoCallback={(value) => {
            dinoTop.current = value;
          }}
        ></Dino>
        <Cactus gameOver={gameOver} cactusCallback={isAlive}></Cactus>
      </div>
      {gameOver && (
        <div>
          <span>* * G A M E - O V E R * *</span>
          <button onClick={reset}>Try again</button>
        </div>
      )}
    </div>
  );
}
