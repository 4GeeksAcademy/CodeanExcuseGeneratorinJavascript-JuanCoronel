/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  let who = ["El perro", "Mi abuela", "Mi gato", "Mi hermano"];
  let action = ["se comió", "ensució", "pisó", "rompió"];
  let what = ["mi tarea", "las llaves", "el coche", "el cuaderno"];
  let when = [
    "antes de ir a clase",
    "en el peor momento",
    "cuando no estaba en casa",
    "mientras almorzaba",
    "mientras estaba durmiendo"
  ];

  let valorRandom1 = Math.floor(Math.random() * who.length);
  let valorRandom2 = Math.floor(Math.random() * action.length);
  let valorRandom3 = Math.floor(Math.random() * what.length);
  let valorRandom4 = Math.floor(Math.random() * when.length);

  document.getElementById("excuse").innerHTML =
    who[valorRandom1] +
    " " +
    action[valorRandom2] +
    " " +
    what[valorRandom3] +
    " " +
    when[valorRandom4];
};
