var background_1 = new Image();
var background_2 = new Image();
var speed_back1 = 5;
var title_opacity = 1;
var startTime = new Date();

title_flag = true;
function init(){

  background_1.src = 'img/background-tilable.png';
  background_2.src = 'img/background-tilable.png';
  console.log(background_2);
  background_position = 1080 - 400;
  window.requestAnimationFrame(draw);
}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0,0,1920,1080); // effacer le canvas

  ctx.fillStyle = 'rgba(0,0,0,'+ title_opacity +')';
  ctx.fillRect(0, 0, 1920, 1080);

  ctx.save();

  //DRAW BACKGROUND
  var time = new Date();
  position1 = 2373*(time.getSeconds()/60 + time.getMilliseconds()/60000)*speed_back1 % 2373;
  ctx.translate(position1,background_position);
  ctx.drawImage(background_1,0,0);
  ctx.restore();
  ctx.save();
  //make tilable
  position2 = (2373*(time.getSeconds()/60 + time.getMilliseconds()/60000)*speed_back1 % 2373 ) -2373;
  ctx.translate(position2,background_position);
  ctx.drawImage(background_2,0,0);
  ctx.restore();
  ctx.save();

  //DEBUG
  ctx.font = "30px Arial";
  ctx.fillStyle = "grey";
  ctx.fillText(position2,500,50);
  ctx.restore();

  if (title_flag) {
    setTimeout(function(){
    title_flag = false;
    title_opacity = 0;
    }, 3000);
  }
  var elapsed=parseInt(new Date() - startTime);
  title_opacity = title_opacity-(elapsed/30000);

  window.requestAnimationFrame(draw);
}

init();
