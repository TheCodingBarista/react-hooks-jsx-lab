import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>My name is Mel, and I think I'm pretty dope. So does my lady.</p>
    <img src={ image } alt={ "I made this"}></img>
  </div>;
}

export default About;
