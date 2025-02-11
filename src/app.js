import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
const action = ['ate', 'peed', 'crushed', 'broke'];
const what = ['my homework', 'my phone', 'the car'];
const when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function Randomizer(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
const randomExcuse = `${Randomizer(who)} ${Randomizer(action)} ${Randomizer(what)} ${Randomizer(when)}`

document.getElementById("LolExcuse").innerHTML = randomExcuse;
;
}
