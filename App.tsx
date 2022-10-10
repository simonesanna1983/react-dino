import * as React from 'react';
import { useRef, useState } from 'react';
import Cactus from './cactus';
import Dino from './dino';
import './style.css';

export default function App() {
  const [jump, setJump] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const dinoTop = useRef(150);

  const isAlive = (cactusLeft) => {
    //console.log(cactusLeft);

    if (
      cactusLeft < 50 &&
      cactusLeft > 0 &&
      dinoTop.current >= 140 &&
      !gameOver
    ) {
      // collision
      //alert('Game Over!');
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
        onKeyPress={(e) => {
          if (e.key === 'Space') {
            setJump(true);
          }
        }}
        tabIndex={0}
      >
        {/* <div id="dino"></div> */}
        <Dino
          isJumping={jump}
          dinoJumpCallback={() => {
            console.log('callback', jump);
            setJump(false);
          }}
          dinoCallback={(value) => {
            dinoTop.current = value;
          }}
        ></Dino>
        <Cactus
          isDisplayed={true}
          gameOver={gameOver}
          cactusCallback={isAlive}
        ></Cactus>
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
