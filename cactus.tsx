import * as React from 'react';
import { Fragment, useEffect, useRef, useState } from 'react';
import './style.css';

interface props {
  isDisplayed: boolean;
  cactusCallback: (cactusPosition: number) => void;
}

export default function Cactus(prop: props) {
  const cactusRef = useRef<HTMLDivElement>(null);
  const [positionX, setPositionX] = useState();

  // useEffect(() => {
  //   alert(0);
  //   prop.cactusCallback(cactusRef?.current?.offsetLeft);
  // }, [cactusRef]);

  const checkCactus = () => {
    const cactusLeft = cactusRef?.current?.offsetLeft;

    prop.cactusCallback(cactusLeft);
  };

  setInterval(checkCactus, 200);

  return (
    <Fragment>
      <div ref={cactusRef} className={prop.isDisplayed ? 'cactus' : ''}></div>
    </Fragment>
  );
}
