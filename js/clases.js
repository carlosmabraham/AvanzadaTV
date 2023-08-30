const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
let x = 225, y = 225;
let dir = 0;

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
    }
});

const update = () => {
    switch(dir) {
        case 1:
            y -= 10;
            if( y < -50 ) { y = 550 };
            break;
        case 2:
            y += 10;
            if( y > 550 ) { y = -50 };
            break;
        case 3:
            x -= 10;
            if( x < -50 ) { x = 550 };
            break;
        case 4:
            x += 10;
            if( x > 550 ) { x = -50 };
            break;
    }

    repaintCanvas();
    ctx.fillStyle = random_rgba();
    repaint();
    window.requestAnimationFrame(update);
};

window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 17);
        };
}());

window.requestAnimationFrame(update);

const repaint = () => {
    ctx.fillRect(x, y, 50, 50);
    ctx.strokeRect(x, y, 50, 50);
};

const repaintCanvas = () => {
    ctx.fillStyle = "#F1EBE5";
	ctx.fillRect(0,0,500,500);
}

const random_rgba = () => {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
};