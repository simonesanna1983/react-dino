import * as React from 'react';
import { Fragment, useEffect, useRef, useState } from 'react';
import './style.css';

interface props {
  gameOver: boolean;
  cactusCallback: (cactusPosition: number) => void;
}

export default function Cactus(prop: props) {
  const cactusRef = useRef<HTMLDivElement>(null);
  const [interv, setInterv] = useState(0);

  useEffect(() => {
    if (interv === 0) {
      setInterv(setInterval(checkCactus, 200));
    }
  }, []);

  const checkCactus = () => {
    const cactusLeft = cactusRef?.current?.offsetLeft;

    if (prop.gameOver) {
      console.log('clear', interv);
      clearInterval(interv);
    }

    if (cactusLeft) {
      prop.cactusCallback(cactusLeft);
    }
  };

  return (
    <Fragment>
      <div ref={cactusRef} className={!prop.gameOver ? 'cactus' : ''}></div>
    </Fragment>
  );
}
