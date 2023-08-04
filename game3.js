const main=document.querySelector(".main");
const game={score:0,streak:0};

const btn=document.createElement('button');
const btn1=document.createElement('button');
const output =document.createElement('div');
const scoring =document.createElement('div');
const message =document.createElement('div');
message.classList.add('message');
message.textContent = 'press Button to start a Game';
main.append(message);
main.append(scoring);
main.append(output);
main.append(btn);
main.append(btn1);
btn.classList.add('btn');
btn1.classList.add('btn');

scoring.classList.add('score');

const coin=document.createElement('div');
const sidea = document.createElement('div');
const sideb = document.createElement('div');
output.append(coin);
coin.append(sidea);
coin.append(sideb);
sidea.innerHTML ="&#9786;";
sideb.innerHTML ="&#9785;";
coin.classList.add('coin');
coin.style.display= 'none';
btn.textContent="start Game";
btn.addEventListener('click',playGame);
btn1.textContent="Heads";

btn1.addEventListener('click',playGame);
btn1.style.display='none';

btn.style.backgroundColor = 'red';
btn1.style.backgroundColor = 'blue';





function playGame(e){
    console.log(e.target.textContent);
    const el=e.target;
    if(el.textContent==='start Game'){
        game.score=0;
        game.streak=0;
        message.textContent = 'select either Heads or Tails';
        btn.textContent='Heads';
        btn1.textContent='Tails';
        btn1.style.display='block';
        coin.style.display ='block';
        addScore();
    }else if(el.textContent==='Heads'){
        //console.log('flip coin');
        coinFlipper('Heads');
    }
    else if(el.textContent==='Tails'){
        //console.log('flip coin');
        coinFlipper('Tails');
    }
   
   // btn.style.display='none';
}
function coinFlipper(val){
    const ranValue = Math.floor(Math.random()*2);
    let result="";

    if(ranValue ===1){
        sidea.style.display = 'block';
        sideb.style.display ='none';
        result='Heads';
    }
    else{
        sideb.style.display ='block';
        sidea.style.display ='none';
        result='Tails';
    }
    //add scoring
    if(result=== val){
        game.score++;
        game.streak++;
        message.textContent = `you picked ${val} correct it was ${result}`;
    }else{
        game.streak=0;
        game.score--;
        message.textContent = `you picked ${val} wrong!!! was ${result}`;
    }
    addScore();
    return result;
}

function addScore(){
    scoring.innerHTML=`score: ${game.score} streak (${game.streak})`;
}