/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");
};
//write your code here

var pronoun = ["the", "our", "Heavy", "danger", "loli", "metal"];
var adj = ["great", "big", "gucci", "garbage", "thicc", "lemon", "selling"];
var noun = [
  "jogger",
  "racoon",
  "icecream",
  "jimmy",
  "rama",
  "games",
  "jackpot"
];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      document.writeln(pronoun[i] + adj[j] + noun[k] + ".com" + "<br/>");
    }
  }
}
