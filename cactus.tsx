import * as React from 'react';
import { useEffect, useState } from 'react';
import './style.css';

interface props {
  isDisplayed: boolean;
}

export default function Cactus(prop: props) {
  return <div id="cactus" className={prop.isDisplayed ? 'cactus' : ''}></div>;
}
