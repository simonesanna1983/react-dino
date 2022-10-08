import * as React from 'react';
import { useState } from 'react';
import Dino from './dino';
import './style.css';

export default function App() {
  const [jump, setJump] = useState(true);

  return (
    <div className="game">
      {/* <div id="dino"></div> */}
      <Dino isJumping={jump}></Dino>
      <div id="cactus"></div>
    </div>
  );
}
