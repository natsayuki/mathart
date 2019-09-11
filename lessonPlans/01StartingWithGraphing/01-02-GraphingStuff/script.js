var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.flip();

function f(x){
  return x;
}

function g(x){
  return x**2;
  // return (x-200)**2;
  // return ((x-200)**2)+50;
}

// Add following lines after fillRect g isn't sufficient
ctx.beginPath();
ctx.moveTo(0, g(0));

// Have a seperate for loop for g initially then show they can be in one

for(let x = 0; x <= canvas.width; x++){
  ctx.fillRect(x, f(x), 1, 1);
  // ctx.fillRect(x, g(x), 1, 1);
  // Replace above line of code with following line
  ctx.lineTo(x, g(x));
}

// Add following line after fillRect g isn't sufficient
ctx.stroke();
