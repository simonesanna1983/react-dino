import * as React from 'react';
import Dino from './dino';
import './style.css';

export default function App() {
  return (
    <div className="game">
      {/* <div id="dino"></div> */}
      <Dino isJumping={true}></Dino>
      <div id="cactus"></div>
    </div>
  );
}
