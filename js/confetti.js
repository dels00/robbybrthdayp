const canvas = document.getElementById('confetti');

if(canvas){
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let pieces = [];

  // jumlah lebih sedikit (30 love)
  for(let i=0;i<30;i++){
    pieces.push({
      x: Math.random()*canvas.width,
      y: Math.random()*canvas.height,
      size: Math.random()*12+8,
      speed: Math.random()*0.5+0.3
    });
  }

  function drawHeart(x,y,size){
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.bezierCurveTo(x,y-size/2,x-size,y-size/2,x-size,y);
    ctx.bezierCurveTo(x-size,y+size/2,x,y+size,x,y+size*1.3);
    ctx.bezierCurveTo(x,y+size,x+size,y+size/2,x+size,y);
    ctx.bezierCurveTo(x+size,y-size/2,x,y-size/2,x,y);
    ctx.fillStyle="red";
    ctx.fill();
  }

  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    pieces.forEach(p=>{
      drawHeart(p.x,p.y,p.size);
    });

    update();
    requestAnimationFrame(draw);
  }

  function update(){
    pieces.forEach(p=>{
      p.y += p.speed;      // turun pelan
      if(p.y > canvas.height){
        p.y = -20;
        p.x = Math.random()*canvas.width;
      }
    });
  }

  draw();
}
