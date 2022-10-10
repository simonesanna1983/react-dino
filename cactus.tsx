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
      setInterv(setInterval(checkCactus, 10));
    }
  }, []);

  const checkCactus = () => {
    const cactusLeft = window
      .getComputedStyle(cactusRef.current, null)
      .getPropertyValue('left');

    // const cactusLeft = cactusRef?.current?.offsetLeft;
    // if (cactusLeft < 200) console.log('checkCactus', cactusLeft);

    if (prop.gameOver) {
      console.log('clear', interv);
      clearInterval(interv);
    }

    if (cactusLeft) {
      prop.cactusCallback(parseInt(cactusLeft));
    }
  };

  return (
    <Fragment>
      <div ref={cactusRef} className={!prop.gameOver ? 'cactus' : ''}></div>
    </Fragment>
  );
}
