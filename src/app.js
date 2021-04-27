/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoNumberRandom = 0;
  let whatNumberRandom = 0;
  let whenNumberRandom = 0;

  for (let i = 0; i < who.length; i++) {
    whoNumberRandom = Math.floor(Math.random() * i);
  }

  for (let j = 0; j < what.length; j++) {
    whatNumberRandom = Math.floor(Math.random() * j);
  }

  for (let k = 0; k < when.length; k++) {
    whenNumberRandom = Math.floor(Math.random() * k);
  }

  document.getElementById("excuse").innerHTML = `${who[
    whoNumberRandom
  ].toLocaleUpperCase()} ${what[whatNumberRandom].toUpperCase()} ${when[
    whenNumberRandom
  ].toUpperCase()}`;
};
