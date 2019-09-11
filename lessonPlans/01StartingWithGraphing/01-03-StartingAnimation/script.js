var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.flip();

var xOffset = 0;

function f(x){
  return x + xOffset;
}

ctx.fillStyle = 'blue';
ctx.strokeStyle = 'yellow';

function mainLoop(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(xOffset, 50, 20, 20);
  ctx.graph(f);
  xOffset = xOffset + 1;
  // xOffset += 1;
  // xOffset++;
  // xOffset += 2;
}

setInterval(mainLoop, 1000/60);
