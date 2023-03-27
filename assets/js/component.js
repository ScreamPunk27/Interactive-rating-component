const number1=document.querySelector('.number1');
const number2=document.querySelector('.number2');
const number3=document.querySelector('.number3');
const number4=document.querySelector('.number4');
const number5=document.querySelector('.number5');
const button=document.getElementById('btn-submit');
const screenNumbers=document.querySelector('.numbers-screen');
const screenMessage=document.querySelector('.number-selected');
const mynumber=document.querySelector('.mynumber');


/*NUMBERS*/
let numberMessage="0";

number1.addEventListener('click',()=>{
    number1.style.background="hsl(25, 97%, 53%)";
    numberMessage="1";
    number2.style.background="hsl(213, 19%, 18%)";
    number3.style.background="hsl(213, 19%, 18%)";
    number4.style.background="hsl(213, 19%, 18%)";
    number5.style.background="hsl(213, 19%, 18%)";
});

number2.addEventListener('click',()=>{
    number2.style.background="hsl(25, 97%, 53%)";
    numberMessage="2";
    number1.style.background="hsl(213, 19%, 18%)";
    number3.style.background="hsl(213, 19%, 18%)";
    number4.style.background="hsl(213, 19%, 18%)";
    number5.style.background="hsl(213, 19%, 18%)";
});

number3.addEventListener('click',()=>{
    number3.style.background="hsl(25, 97%, 53%)";
    numberMessage="3";
    number1.style.background="hsl(213, 19%, 18%)";
    number2.style.background="hsl(213, 19%, 18%)";
    number4.style.background="hsl(213, 19%, 18%)";
    number5.style.background="hsl(213, 19%, 18%)";
});

number4.addEventListener('click',()=>{
    number4.style.background="hsl(25, 97%, 53%)";
    numberMessage="4";
    number1.style.background="hsl(213, 19%, 18%)";
    number2.style.background="hsl(213, 19%, 18%)";
    number3.style.background="hsl(213, 19%, 18%)";
    number5.style.background="hsl(213, 19%, 18%)";
});

number5.addEventListener('click',()=>{
    number5.style.background="hsl(25, 97%, 53%)";
    numberMessage="5";
    number1.style.background="hsl(213, 19%, 18%)";
    number2.style.background="hsl(213, 19%, 18%)";
    number3.style.background="hsl(213, 19%, 18%)";
    number4.style.background="hsl(213, 19%, 18%)";
});

button.addEventListener('click',()=>{
    if(numberMessage==="0"){
        alert("Please, choose a number");
    }else{
        screenNumbers.style.display="none";
        screenMessage.style.display="flex";
        mynumber.innerHTML=numberMessage;
    }
});