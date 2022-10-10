import * as React from 'react';
import { Fragment, useEffect, useRef, useState } from 'react';
import './style.css';

interface props {
  isDisplayed: boolean;
  gameOver: boolean;
  cactusCallback: (cactusPosition: number) => void;
}

export default function Cactus(prop: props) {
  const cactusRef = useRef<HTMLDivElement>(null);

  const checkCactus = () => {
    const cactusLeft = cactusRef?.current?.offsetLeft;

    prop.cactusCallback(cactusLeft);
  };

  setInterval(checkCactus, 200);

  return (
    <Fragment>
      <div
        ref={cactusRef}
        className={prop.isDisplayed && !prop.gameOver ? 'cactus' : ''}
      ></div>
    </Fragment>
  );
}
