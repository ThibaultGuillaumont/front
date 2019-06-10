var background_1 = new Image();
var background_far_1 = new Image();
var speed_back1 = 5;
var speed_back_far = 3.5;
var title_opacity = 1;
var startTime = new Date();
var background_position = 1080 - 400;
var background_far_position = background_position -200;

title_flag = true;
function init(){

  background_1.src = 'img/background-tilable.png';
  background_far_1.src = "img/background-far-tilable.png"

  window.requestAnimationFrame(draw);
}

function draw() {
  var elapsed=parseInt(new Date() - startTime);
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0,0,1920,1080); // effacer le canvas

  //Debut title
  ctx.font = "60px Arial";
  ctx.textAlign = 'center';
  ctx.fillStyle = "grey";
  ctx.globalAlpha = title_opacity;
  ctx.fillText("The soil of a man’s heart is stonier.",960,500);
  ctx.fillText("A man grows what he can... and tends it.",960,580);
  ctx.globalAlpha = 1;
  ctx.fillStyle = 'rgba(0,0,0,'+ title_opacity +')';
  ctx.fillRect(0, 0, 1920, 1080);
  ctx.save();



  if (title_flag) {
    title_fade(elapsed)
    setTimeout(function(){
      title_flag = false;
    }, 3000);
  }


  draw_background(elapsed);

  //DEBUG
  ctx.font = "30px Arial";
  ctx.fillStyle = "grey";
  //ctx.fillText(position2,500,50);
  ctx.restore();



  window.requestAnimationFrame(draw);
}

function draw_background(elapsed) {
  var ctx = document.getElementById('canvas').getContext('2d');
  //DRAW BACKGROUND
  position1 = 2373*(elapsed/100000)*speed_back1 % 2373;
  ctx.translate(position1,background_position);
  ctx.drawImage(background_1,0,0);
  ctx.restore();
  ctx.save();
  //make tilable
  position2 = (2373*(elapsed/100000)*speed_back1 % 2373 ) -2373;
  ctx.translate(position2,background_position);
  ctx.drawImage(background_1,0,0);
  ctx.restore();
  ctx.save();


  //DRAW Far AWAY BACKGROUND
  position1 = 2772*(elapsed/100000)*speed_back_far % 2772;
  ctx.translate(position1,background_far_position);
  ctx.globalAlpha = 0.8;
  ctx.filter = 'blur(2px)';
  ctx.drawImage(background_far_1,0,0);
  ctx.restore();
  ctx.save();
  //make tilable
  position2 = (2772*(elapsed/100000)*speed_back_far % 2772 ) -2772;
  ctx.translate(position2,background_far_position);
  ctx.globalAlpha = 0.8;
  ctx.filter = 'blur(2px)';
  ctx.drawImage(background_far_1,0,0);
  ctx.restore();
  ctx.save();


}

function title_fade(elapsed) {
  setTimeout(function(){
    fadeAnimation = setInterval( function(){
      title_opacity = title_opacity-(elapsed/30000);
      if(title_opacity<0) {title_opacity=0}
    }
    ,100);
    setTimeout(function(){
      clearInterval(fadeAnimation);
    },
    3000)

  },3000)
}

init();
