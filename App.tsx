import * as React from 'react';
import { useRef, useState } from 'react';
import Cactus from './cactus';
import Dino from './dino';
import './style.css';

export default function App() {
  const [jump, setJump] = useState(false);
  const cactusLeft = useRef(0);
  const dinoTop = useRef(0);

  // let isAlive = setInterval(function () {
  //   // get current dino Y position
  //   let dinoTop = parseInt(
  //     window.getComputedStyle(dino).getPropertyValue('top')
  //   );

  //   // get current cactus X position
  //   let cactusLeft = parseInt(
  //     window.getComputedStyle(cactus).getPropertyValue('left')
  //   );

  //   // detect collision
  //   if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
  //     // collision
  //     alert('Game Over!');
  //   }
  // }, 10);

  const isAlive = (cactusLeft) => {
    console.log(cactusLeft);

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop.current >= 140) {
      // collision
      alert('Game Over!');
    }
  };

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
        dinoJumpCallback={() => {
          console.log('callback', jump);
          setJump(false);
        }}
        dinoCallback={(value) => {
          dinoTop.current = value;
        }}
      ></Dino>
      <Cactus isDisplayed={true} cactusCallback={isAlive}></Cactus>
    </div>
  );
}
