let randomnum=(parseInt(Math.random()*100+1));
const submit=document.querySelector('#btn');
const userinp=document.querySelector('#inp');
const prevele=document.querySelector('#prev');
const remaining=document.querySelector('#rem');
const lowhi=document.querySelector('#lowhi');
const newbtn=document.querySelector('#btn-2');

const p=document.createElement('p');
let prevguess=[];
let numguess=1;
let playgame=true;

if(playgame===true){
    submit.addEventListener('click', function(e){
        const guess=parseInt(userinp.value);
        validateguess(guess);
    })
}
function validateguess(guess){
    if(isNaN(guess)){
        alert('Please Enter a valid Number');
    }
    else if(guess<1){
        alert('Please Enter a valid Number greater than 0');
    }
    else if(guess>100){
        alert('Please Enter a valid Number less than 100');
    }
    else{
        prevguess.push(guess);
        if(numguess===11){
            displayG(guess);
            displayM(`GAME OVER!!! Random Number was ${randomnum}`);
            endg();
        }
        else{
            displayG(guess);
            checkguess(guess);
        }
    }
}
function checkguess(guess){
    if(guess===randomnum){
        displayM('HURRAY!!! You guessed it right!!!');
        endg();
    }
    else if(guess<randomnum){
        displayM('Number is TOOOO Low');
    }
    else if(guess>randomnum){
        displayM('Number is TOOOO High');
    }
}
function displayM(message){
    lowhi.innerHTML=`${message}`;
}
function displayG(guess){
    userinp.value='';
    prevele.innerHTML+=`${guess} | `;
    numguess++;
    remaining.innerHTML=`${11-numguess}`;
    if(remaining.innerHTML===`-1`){
        remaining.innerHTML=`0`;
    }
}
function endg(){
    userinp.value='';
    userinp.setAttribute('disabled', '');
    document.getElementById("btn-2").style.display="inline";
    playgame=false;
}
function newg(){
    randomnum=(parseInt(Math.random()*100+1));
    prevguess=[];
    numguess=1;
    userinp.removeAttribute('disabled');
    remaining.innerHTML=10;
    prevele.innerHTML='';
    lowhi.innerHTML='';
    document.getElementById("btn-2").style.display="none";
    playgame=true;
}