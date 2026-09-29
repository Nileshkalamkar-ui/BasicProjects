let gameSeq =[];
let userSeq = [];

let btns = ["red","orenge","blue","purple"]
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

let highest = 0;
document.querySelector("h3").innerText = `highest score : ${highest}`
document.addEventListener("keypress",function(){
    if(started == false){
        started = true;
        // console.log("game started");
        levelUp();
    }
})  


function btnflash (btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash")
  },250);
}

function check(idx){
  
   if(userSeq[idx]==gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1000);
    }
}else{
       if (level>highest){
        highest = level;
        document.querySelector("h3").innerText = `highest score : ${highest}`
       }
    h2.innerHTML = `Game over ! Your score is <b>${level}</b> <br> press any key to start . ` ;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
    document.querySelector("body").style.backgroundColor = "white";
          
    },150)
    reset();
    
   }
}
function levelUp(){
    userSeq = [];
    level++;
   h2.innerText =  `level ${level}`;
   let randIdx = Math.floor(Math.random()*4);
   let randColor = btns[randIdx];
   let randBtn = document.querySelector(`.${randColor}`);
   gameSeq.push(randColor);
   console.log(gameSeq);
   btnflash(randBtn);
}

function btnPress(){
    let btn = this;
    btnflash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
   check(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns){
    btn.addEventListener("click",btnPress)
}
function reset(){
    started = false;
    userSeq = [];
    level = 0;
    gameSeq = []; 
}
