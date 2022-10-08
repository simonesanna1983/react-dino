import * as React from 'react';
import { useState } from 'react';
import Dino from './dino';
import './style.css';

export default function App() {
  const [jump, setJump] = useState(false);

  return (
    <div
      className="game"
      onClick={() => {
        setJump(true);
      }}
    >
      {/* <div id="dino"></div> */}
      <Dino
        isJumping={jump}
        dinoCallback={() => {
          console.log('callback', jump);
          setJump(false);
        }}
      ></Dino>
      <div id="cactus"></div>
    </div>
  );
}
