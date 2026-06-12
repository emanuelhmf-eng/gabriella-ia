const canvas =
document.getElementById("stars");

const ctx =
canvas.getContext("2d");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

const coracoes=[];

for(let i=0;i<60;i++){

coracoes.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

size:10+Math.random()*20,

speed:0.5+Math.random()

});

}

function desenhar(){

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);

coracoes.forEach(c=>{

ctx.fillStyle=
"rgba(255,77,109,.4)";

ctx.font=
`${c.size}px Arial`;

ctx.fillText(
"❤️",
c.x,
c.y
);

c.y-=c.speed;

if(c.y<0){

c.y=
canvas.height;

}

});

requestAnimationFrame(
desenhar
);

}

desenhar();