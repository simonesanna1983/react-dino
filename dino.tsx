import * as React from 'react';
import { useState } from 'react';
import './style.css';

interface props {
  isJumping: boolean;
}

export default function Dino(prop: props) {
  const [jump, setJump] = useState(false);

  // function jump() {
  //   if (dino.classList != "jump") {
  //     dino.classList.add("jump");

  //     setTimeout(function () {
  //       dino.classList.remove("jump");
  //     }, 300);
  //   }
  // }

  return (
    <div id="dino" className={prop.isJumping ? 'jump' : 'dino'}>
      A
    </div>
  );
}
