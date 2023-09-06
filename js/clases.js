var cv = null;
var ctx = null;
var press = false;
var player1 = null;
var player2 = null;
var pared = null;

var direccion = 'right';
var score = 0;
var speed = 10;
var pause = false;

var shark = new Image();
var coin = new Image();

var sound1 = new Audio();

function run() {
    cv = document.getElementById('myCanvas');
    ctx = cv.getContext('2d');
    player1 = new Cuadro(250, 250, 40, 40, "red");

    player2 = new Cuadro(getRandomInt(500), getRandomInt(500), 40, 40, "yellow");

    pared = new Cuadro(40, 120, 30, 300, "gray");

    //shark.src = 'shark.png';
    //coin.src = 'coin.png';

    //sound1.src = 'donkey-kong-coin.mp3';

    paint();
}

function paint() {
    window.requestAnimationFrame(paint)
    ctx.fillStyle = "pink";
    ctx.fillRect(0, 0, 500, 500);
    ctx.fillStyle = "black";
    ctx.fillText("SCORE:" + score, 10, 20)

    player1.pintar(ctx);
    //player1.pintar(ctx);
    ctx.drawImage(shark, player1.x, player1.y)

    player2.pintar(ctx);
    //player2.pintar(ctx);
    ctx.drawImage(coin, player2.x, player2.y)

    pared.pintar(ctx);

    if (pause) {

        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fillRect(0, 0, 500, 500);

        ctx.fillStyle = "white";
        ctx.fillText('P A U S E', 230, 230)

    } else {
        update();
    }


}

function update() {

    //arriba
    if (direccion == 'up') {
        player1.y -= speed;
        if (player1.y < 0) {
            player1.y = 500;
        }
    }
    //abajo
    if (direccion == 'down') {
        player1.y += speed;
        if (player1.y > 500) {
            player1.y = 0;
        }
    }
    //izquierda
    if (direccion == 'left') {
        player1.x -= speed;
        if (player1.x < 0) {
            player1.x = 500;
        }
    }
    //derecha
    if (direccion == 'right') {
        player1.x += speed;
        if (player1.x > 500) {
            player1.x = 0;
        }
    }
    if (player1.se_tocan(player2)) {
        player2.x = getRandomInt(500);
        player2.y = getRandomInt(500);
        score += 10;
        speed += 5;

        sound1.play();

    }

    if (player1.se_tocan(pared)) {
        if (direccion == 'up') {
            player1.y += speed;
        }

        //abajo
        if (direccion == 'down') {
            player1.y -= speed;
        }

        //izquierda
        if (direccion == 'left') {
            player1.x += speed;
        }

        //derecha
        if (direccion == 'right') {
            player1.x -= speed;
        }
    }
}

function Cuadro(x, y, w, h, c) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
    this.se_tocan = function (target) {
        if (this.x < target.x + target.w &&
            this.x + this.w > target.x &&
            this.y < target.y + target.h &&
            this.y + this.h > target.y) {
            return true;
            console.log("Hola")
        }
    };
    this.pintar = function (ctx) {
        ctx.fillStyle = this.c;
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.strokeRect(this.x, this.y, this.w, this.h);
    }
}
window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 17);
        };
}());
document.addEventListener('keydown', function (e) {
    //arriba
    if (e.keyCode == 87 || e.keyCode == 38) {
        direccion = 'up';
    }
    //abajo
    if (e.keyCode == 83 || e.keyCode == 40) {
        direccion = 'down';
    }
    //izquierda
    if (e.keyCode == 65 || e.keyCode == 37) {
        direccion = 'left';
    }
    //derecha
    if (e.keyCode == 68 || e.keyCode == 39) {
        direccion = 'right';
    }

    //pause
    if (e.keyCode == 32) {

        pause = (pause) ? false : true;

    }

})

window.addEventListener('load', run, false);
function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}