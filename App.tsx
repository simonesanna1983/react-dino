import * as React from 'react';
import { useRef, useState } from 'react';
import Dino from './dino';
import './style.css';

export default function App() {
  const [jump, setJump] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const dinoTop = useRef(150);
  const cactusRef = useRef<HTMLDivElement>(null);

  const isAlive = (cactusLeft) => {
    if (
      cactusRef.current.offsetLeft < 50 &&
      cactusRef.current.offsetLeft > 0 &&
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

  interface cactusProps {
    gameOver: boolean;
    cactusRef: any;
  }

  const Cactus = React.forwardRef((props: cactusProps) => {
    return (
      <div
        ref={props.cactusRef}
        className={!props.gameOver ? 'cactus' : ''}
      ></div>
    );
  });

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
            setJump(false);
          }}
          dinoCallback={(value) => {
            dinoTop.current = value;
          }}
        ></Dino>
        <Cactus gameOver={gameOver} cactusRef={cactusRef}></Cactus>
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
