// import * as React from 'react';
// import { Fragment, useEffect, useRef } from 'react';
// import './style.css';

// interface props {
//   gameOver: boolean;
//   cactusCallback: (cactusPosition: number) => void;
// }

// export default function Cactus(prop: props) {
//   const cactusRef = useRef<HTMLDivElement>(null);

//   let setInt;

//   useEffect(() => {
//     setInt = setInterval(checkCactus, 200);
//   }, []);

//   const checkCactus = () => {
//     const cactusLeft = cactusRef?.current?.offsetLeft;

//     if (prop.gameOver) {
//       console.log('clear', setInt);
//       clearInterval(setInt);
//     }

//     prop.cactusCallback(cactusLeft);
//   };

//   return (
//     <Fragment>
//       <div ref={cactusRef} className={!prop.gameOver ? 'cactus' : ''}></div>
//     </Fragment>
//   );
// }
