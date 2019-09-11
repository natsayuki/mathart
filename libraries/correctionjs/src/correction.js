function correctContext(ctx){
}

CanvasRenderingContext2D.prototype.flip = function(){
  this.translate(0, ctx.canvas.height);
  this.scale(1, -1);
}

CanvasRenderingContext2D.prototype.graph = function(f){
  this.beginPath();
  this.moveTo(0, f(0));
  for(let i = 0; i <= this.canvas.width; i++){
    this.lineTo(i, f(i));
  }
  this.stroke();
}

CanvasRenderingContext2D.prototype.clear = function(){
  this.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

function createSlider(data, min, max, labelText){
  min = min || 0;
  max = max || 10;
  if(data.constructor.name != 'Number'){
    console.log("Can only create slide of numbers");
    return;
  }
  const slider = document.createElement('input');
  const div = document.createElement('div');
  const p = document.createElement('p');
  const label = document.createElement('p');
  p.innerHTML = data;
  p.setAttribute('style', 'display: inline-block');
  label.innerHTML = labelText;
  label.setAttribute('style', 'display: inline-block');
  slider.setAttribute('type', 'range');
  slider.setAttribute('value', data);
  slider.setAttribute('min', min);
  slider.setAttribute('max', max);
  slider.setAttribute('style', 'display: inline-block');
  slider.addEventListener('input', e => {
    data = e.target.value;
    p.innerHTML = data;
  });
  div.appendChild(label);
  div.appendChild(slider);
  div.appendChild(p);
  document.body.appendChild(div);
  return {
    slider: slider,
    p: p,
    label: label,
    value: function(){
      return parseInt(this.slider.value);
    },
    set: function(val){
      this.slider.value = val;
    }
  }
}

let mainInterval;

setInterval(function(){
  if(typeof main != 'undefined' && typeof mainInterval == 'undefined'){
    mainInterval = setInterval(function(){
      main();
    }, 1000/60);
  }
}, 10);
