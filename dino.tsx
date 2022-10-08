import * as React from 'react';
import { useEffect, useState } from 'react';
import './style.css';

interface props {
  isJumping: boolean;
  dinoCallback?: () => void;
}

export default function Dino(prop: props) {
  const [jump, setJump] = useState(false);

  useEffect(() => {
    if (prop.isJumping) {
      setTimeout(() => {
        prop.dinoCallback();
      }, 500);
    }
  }, []);

  // function jump() {
  //   if (dino.classList != "jump") {
  //     dino.classList.add("jump");

  //     setTimeout(function () {
  //       dino.classList.remove("jump");
  //     }, 300);
  //   }
  // }

  return (
    <div id="dino" className={prop.isJumping ? 'dino jump' : 'dino'}></div>
  );
}
