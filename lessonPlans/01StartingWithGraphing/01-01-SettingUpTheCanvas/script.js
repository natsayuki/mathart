console.log('Hello, world!');

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.translate(0, ctx.canvas.height);
ctx.scale(1, -1);
ctx.fillStyle = 'blue';
ctx.fillRect(0, 0, 20, 20);
