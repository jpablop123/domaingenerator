/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("hello world");
  for (var noun = 0; noun < pronoun.length; noun++) {
    for (var adjetivo = 0; adjetivo < adj.length; adjetivo++) {
      for (var nombre = 0; nombre < nouns.length; nombre++) {
        for (var extensiones = 0; extension < extension.length; extensiones++) {
          console.log(
            pronoun[noun] +
              adj[adjetivo] +
              nouns[nombre] +
              extension[extensiones] +
              "<br/>"
          );
        }
      }
    }
  }
};
var pronoun = ["the", "our"];
var adj = ["great", "big"];
var nouns = ["jogger", "racoon"];
var extension = [".com", ".net", ".ios", ".bos"];

for (var noun = 0; noun < pronoun.length; noun++) {
  for (var adjetivo = 0; adjetivo < adj.length; adjetivo++) {
    for (var nombre = 0; nombre < nouns.length; nombre++) {
      for (var extensiones = 0; extension < extension.length; extensiones++) {
        console.log(
          pronoun[noun] +
            adj[adjetivo] +
            nouns[nombre] +
            extension[extensiones] +
            "<br/>"
        );
      }
    }
  }
}
