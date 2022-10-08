import * as React from 'react';
import { useState } from 'react';
import Cactus from './cactus';
import Dino from './dino';
import './style.css';

export default function App() {
  const [jump, setJump] = useState(false);

  let isAlive = setInterval(function () {
    // get current dino Y position
    let dinoTop = parseInt(
      window.getComputedStyle(dino).getPropertyValue('top')
    );

    // get current cactus X position
    let cactusLeft = parseInt(
      window.getComputedStyle(cactus).getPropertyValue('left')
    );

    // detect collision
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
      // collision
      alert('Game Over!');
    }
  }, 10);

  return (
    <div
      className="game"
      onClick={() => {
        setJump(true);
      }}
      onKeyPress={(e) => {
        alert(0);
        if (e.key === 'Space') {
          setJump(true);
        }
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
      <Cactus isDisplayed={true}></Cactus>
    </div>
  );
}
