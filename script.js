
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//console.log(ctx);
let mouseX =0;
let mouseY = 0;

let ParticleArray = [];
let hue = 0;
canvas.addEventListener('mousemove', (e) =>{
   // console.log(e);
    mouseX = e.x;
    mouseY = e.y;
    for(let i =0; i<10;i++){
        ParticleArray.push(new Particle());
    }
})

class Particle {
    constructor(){
        this.x = mouseX;
        this.y = mouseY;
        this.size = Math.random() * 15 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = 'hsl('+hue+',100%, 50%)';

    }
    update(){  
         this.x += this.speedX ; 
        this.y += this.speedY;
        if(this.size > 0.2) this.size -= 0.1; 
      }
    draw(){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function gameloop(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    for(let i =0; i < ParticleArray.length; i++){
       ParticleArray[i].update();
       ParticleArray[i].draw();
       if(ParticleArray[i].size <= 0.3){
        ParticleArray.splice(i, 1);
        i--;
       }
    }
    
    hue += 5;
    requestAnimationFrame(gameloop);
}
gameloop();

   