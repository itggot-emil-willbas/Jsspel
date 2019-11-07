const cvs = document.getElementById('canvas');

const ctx = cvs.getContext('2d');

//Load images

let imageName = new Image();
imageName.src = "../img/apple.png";
let audioNAme = new Audio();
audioName.src = "../sounds/sound.mp3"; //audioName.play();

//Draw images
ctx.drawImage(imageName,X,Y,Width,Height);

//Draw Rectangle
ctx.fillStyle = "red";
ctx.fillRect(100,300,30,30);

//Boxar
let box = 32

ctx.fillStyle = "black";


//Keys
let d;
document.addEventListener("keydown",direction);

function direction(event) {
  if(event.keyCode==37 && d!="RIGHT"){
    d="LEFT";
  }
  else if(event.keyCode==38 && d!="DOWN"){
    d="UP";
  }else if(event.keyCode==39 && d!="LEFT"){
    d="RIGHT";
  }else if(event.keyCode==40 && d!="UP"){
    d="DOWN";
  }
}




let snake = [];
snake[0] = {x: 9*box, y:10*box};
snake[1] = {x: 8*box, y:10*box};
let food = {
  x:Math.floor(Math.random()*17+1) * box
yx:Math.floor(Math.random()*15+1) * box
};
let score = 0;


function draw(){
  ctx.drawImage(ground,0,0);
  //Ormen
  for(let i = 0; i < snake.length; i++){
    ctx.fillStyle = (i == 0) ? "green" : "white";
    ctx.fillRect(snake[i].x, snake[i].y,box,box);
    ctx.strokeStyle = "red";
    ctx.strokeRect(snake[i].x, snake[i].y,box,box);
  }
  //Maten
  ctx.drawImage(foodImg,food.x, food.y)
  //Poäng
  ctx.fillStyle = "white";
  ctx.font = "45px Changa One"
  ctx.fillText(score,2*box,1.6*box)

}



let game = setInterval(draw,100);

//PAUS, movement. https://www.youtube.com/watch?v=9TcU2C1AACw 9:09