import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import './style.css';

interface props {
  isJumping: boolean;
  dinoJumpCallback: () => void;
  dinoCallback: (dinoPosition: number) => void;
}

export default function Dino(prop: props) {
  const dinoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prop.isJumping) {
      setTimeout(() => {
        prop.dinoJumpCallback();
      }, 500);
    }
  }, [prop.isJumping]);

  // function jump() {
  //   if (dino.classList != "jump") {
  //     dino.classList.add("jump");

  //     setTimeout(function () {
  //       dino.classList.remove("jump");
  //     }, 300);
  //   }
  // }

  const checkDino = () => {
    const dinoTop = dinoRef?.current?.offsetTop;

    prop.dinoCallback(dinoTop);
  };

  setInterval(checkDino, 200);

  return (
    <div
      id="dino"
      ref={dinoRef}
      className={prop.isJumping ? 'dino jump' : 'dino'}
    ></div>
  );
}
