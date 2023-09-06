const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
let dir = 0;
let speed = 5;
let walls = [];
let pause = false;
let score = 0;
let elefante = new Image();
let arbol = new Image();
let sound1 = new Audio();
elefante.src = './img/elefante.png';
arbol.src = './img/arbol.png';
sound1.src = './sound/donkey-kong-coin.mp3';


const random_rgba = () => {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
};

const player = new Cuadro(250,250,40,40,random_rgba());
const player2 = new Cuadro(30, 30, 30, 30, "black");
walls.push(new Cuadro(100, 70, 280, 30, "gray"));
walls.push(new Cuadro(100, 400, 280, 30, "gray"));


const repaint = () => {
    window.requestAnimationFrame(repaint);
    ctx.fillStyle = "white";
	ctx.fillRect(0,0,500,500);
    ctx.fillStyle = "black";
    ctx.fillText("SCORE:" + score, 10, 20)

    //player.pintar(ctx);
    ctx.drawImage(elefante, player.x, player.y);
    //player2.pintar(ctx);
    ctx.drawImage(arbol, player2.x, player2.y);
    walls[0].pintar(ctx);
    walls[1].pintar(ctx);

    if( pause ) {
        dir = 0;
        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fillRect(0, 0, 500, 500);

        ctx.fillStyle = "white";
        ctx.fillText('P A U S E', 230, 230)
    } else {
        update();
    }

};

 
const update = () => {
    switch(dir) {
        case 1:
            player.y -= speed;
            if( player.y < -50 ) { player.y = 550 };
            break;
        case 2:
            player.y += speed;
            if( player.y > 550 ) { player.y = -50 };
            break;
        case 3:
            player.x -= speed;
            if( player.x < -50 ) { player.x = 550 };
            break;
        case 4:
            player.x += speed;
            if( player.x > 550 ) { player.x = -50 };
            break;
    }

    if(player.se_tocan(player2)) {
        console.log("hola");
        player2.x = Math.random() * (460);
        player2.y = Math.random() * (440);
        score += 10
        speed += 1;
        sound1.play();
    };


    for(let i = walls.length -1; i >= 0; i--) {
        if(player.se_tocan( walls[i] )) {
            switch(dir) {
                case 1:
                    player.y += speed;
                    break;
                case 2:
                    player.y -= speed;
                    break;
                case 3:
                    player.x += speed;
                    break;
                case 4:
                    player.x -= speed;
                    break;
            }
            dir = 0;
        };

        
    };
};


function Cuadro(x,y,w,h,c) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.c = c;

	this.se_tocan = function (target) { 

		if(this.x < target.x + target.w &&
			this.x + this.w > target.x && 
			this.y < target.y + target.h && 
			this.y + this.h > target.y)
			{
				return true;	 
			}  
		};

    this.pintar = function (ctx) {
        ctx.fillStyle = this.c;
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.strokeRect(this.x, this.y, this.w, this.h);
    };
}



window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 17);
        };
}());
window.requestAnimationFrame(repaint);

document.addEventListener("keydown", (event) => {
    switch(event.keyCode) {
        case 87:
            dir = 1;
            break;
        case 83:
            dir = 2;
            break;
        case 65:
            dir = 3;
            break;
        case 68:
            dir = 4;
            break;
        case 32:
            pause = (pause) ? false : true;
            break;
    }
});


/*
function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}
*/
/*let figura = true;
let press = true;5
//ctx.fillStyle = "rgba(199, 29, 189, 0.5)";

canvas.addEventListener("click", (event) => {
    if(figura) {
        ctx.beginPath();
        ctx.arc(event.layerX, event.layerY, 50, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }else {
        ctx.fillRect(event.layerX-50, event.layerY-50, 100, 100);
        ctx.strokeRect(event.layerX-50, event.layerY-50, 100, 100);
    }
});

canvas.addEventListener("mouseover", (event) => {
    console.log("mouseover");
    color = random_rgba();
    ctx.fillStyle = color;
});



canvas.addEventListener("mouseout", (event) => {
    figura = !figura;

});

canvas.addEventListener("mousemove", (event) => {
    //console.log("mousemove");
    if(press) {
        ctx.beginPath();
        ctx.arc(event.layerX, event.layerY, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }
});

canvas.addEventListener("mousedown", (event) => {
    press = true;
});

canvas.addEventListener("mouseup", (event) => {
    press = false;
});*/


/*ctx.fillStyle = "rgb(53, 129, 220)";
ctx.fillRect(10, 10, 55, 55);

ctx.fillStyle = "rgb(236, 34, 120)";
ctx.fillRect(57, 55, 55, 55);

ctx.fillStyle = "rgba(245, 100, 162, 0.5)";
ctx.fillRect(102, 100, 55, 55);











ctx.fillStyle = "blue";
ctx.font = "40px Arial";
ctx.fillText("Hello world", 300, 50);

ctx.fillStyle = "rgba(245, 100, 162, 0.5)";
ctx.strokeText("Hello world", 304, 54);

let grd = ctx.createLinearGradient(140, 250, 200, 100);
grd.addColorStop(0, "#EBA6C3");
grd.addColorStop(0.5, "#F279AD");
grd.addColorStop(1, "#B2004C");

ctx.fillStyle = grd;
ctx.fillRect(140, 250, 200, 100);


let grd2 = ctx.createRadialGradient(200, 380, 5, 255, 370, 100);
grd2.addColorStop(0, "#5059E1");
grd2.addColorStop(0.5, "#30369D");
grd2.addColorStop(1, "white");

ctx.fillStyle = grd2;
ctx.fillRect(140, 350, 200, 100);


let img = document.getElementById('myImg');
ctx.drawImage(img, 400, 200, 70, 60);
*/
