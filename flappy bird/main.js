var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var bird = new Image() ;
var bg = new Image();
var fg= new Image();
var pipeNorth= new Image();
var pipeSouth= new Image();

bird.src = 'flappyimages/UIHere (1).png';
bg.src = 'flappyimages/725e5dc00ba49c240cd489e7b87e0496.jpg';
fg.src = 'flappyimages/ground.png';
pipeNorth.src = 'flappyimages/upsidedownpipe.png';
pipeSouth.src = 'flappyimages/pipe.png';



var gap = 85;
var constant = pipeNorth.height+gap;

var bx = 10;
var by = 150;
var gravity=1.5;

document.addEventListener("keydown", moveUp);

function moveUp(){
    by-=25;
}

var pipe = [];

pipe[0]={
    x:cvs.width,
    y:0
}

function draw(){
    ctx.drawImage(bg,0,0);

    for(var i = 0; i<pipe.length ;i++){
        ctx.drawImage(pipeNorth, pipe[i].x,pipe[i].y);
        ctx.drawImage(pipeSouth,pipe[i].x,pipe[i].y+constant);

        pipe[i].x--;

        if(pipe[i].x == 125){
            pipe.push({
                x:cvs.width,
                y:Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height,
            })
        }
//reload page for collision
        if(bx + bird.width >= pipe[i].x && bx <= pipe[i].x  + pipeNorth.width &&(by <= pipe[i].y + pipeNorth.height >= pipe[i] || by+bird.height >= pipe[i].y+constant)){

            location.reload();
        }
    }

    ctx.drawImage(fg,0,cvs.height - fg.height);
    ctx.drawImage(bird,bx,by);

    by += gravity;

    requestAnimationFrame(draw);

}

draw();

