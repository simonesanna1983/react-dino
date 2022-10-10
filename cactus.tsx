import * as React from 'react';
import { Fragment, useEffect, useRef } from 'react';
import './style.css';

interface props {
  gameOver: boolean;
  cactusCallback: (cactusPosition: number) => void;
}

export default function Cactus(prop: props) {
  const cactusRef = useRef<HTMLDivElement>(null);

  const checkCactus = () => {
    const cactusLeft = cactusRef?.current?.offsetLeft;

    if (prop.gameOver) {
      clearInterval(setInt);
    }

    prop.cactusCallback(cactusLeft);
  };

  const setInt = setInterval(checkCactus, 200);

  return (
    <Fragment>
      <div ref={cactusRef} className={!prop.gameOver ? 'cactus' : ''}></div>
    </Fragment>
  );
}
