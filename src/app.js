import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

let htmlTxt = document.querySelector('#excuse')
const randomNum = function(arr){
  let num = Math.floor(Math.random() * (arr.length)) 
  return num;
}

htmlTxt.innerHTML = `${who[randomNum(who)]} ${action[randomNum(action)]} ${what[randomNum(what)]} ${when[randomNum(when)]}`
}

