let input1 = document.querySelector("#in-1");
let input2 = document.querySelector("#in-2");
let result = document.querySelector("#result");

let addbtn = document.querySelector("#addbtn");
let subbtn = document.querySelector("#subbtn");
let mulbtn = document.querySelector("#mulbtn");
let divbtn = document.querySelector("#divbtn");
 function add(){
    let a = Number(input1.value);
    let b = Number(input2.value);
     result.innerText = a + b;
     console.log(a+b);
 }

  function sub(){
    let a = Number(input1.value);
    let b = Number(input2.value);
     result.innerText = a - b;
     console.log(a-b);
 }
 
  function mul(){
    let a = Number(input1.value);
    let b = Number(input2.value);
     result.innerText = a * b;
     console.log(a*b);
 }
 
  function div(){
    let a = Number(input1.value);
    let b = Number(input2.value);
     result.innerText = a / b;
     console.log(a/b);
 }
 addbtn.addEventListener("click",add);
 subbtn.addEventListener("click",sub);
 
 mulbtn.addEventListener("click",mul);
 
 divbtn.addEventListener("click",div);
 