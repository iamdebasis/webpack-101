import { generateJoke } from "./generateJoke";
import "./styles/main.scss";
import laughIcon from "./assets/smiley-icon.svg";
const { camelCase } = require("lodash");

const randonNo = crypto.randomUUID();
// console.log(camelCase("me he kkkk loooo"), generateJoke());
console.log("RandomNo--- ", randonNo);

document.getElementById("laughIconImage").src = laughIcon; 
const jokeButton = document.getElementById("jokeBtn");
jokeButton.addEventListener("click", generateJoke);
generateJoke();
