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
const randomNum2 = function(){
  let num = Math.floor(Math.random() * 3) 
  return num;
}
const randomNum3 = function(){
  let num = Math.floor(Math.random() * 4)
  return num;
}
const randomNum4 = function(){
  let num = Math.floor(Math.random() * 5)
  return num;
}
htmlTxt.innerHTML = `${who[randomNum3()]} ${action[randomNum3()]} ${what[randomNum2()]} ${when[randomNum4()]}`
};
