import React from 'react';
import heroImg from './assets/hero.jpg';

function Hero() {
  return (
  <>
  <div className="herosection">
<img src={heroImg} height="800px" width="100%" className="heroimage"></img>
<h1>🍴 TASTY BITES</h1></div>
  </>);
}

export default Hero;