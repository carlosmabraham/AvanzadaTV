const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
let x = 225, y = 225;



document.addEventListener("keydown", (event) => {
    console.log(event);
    
    switch(event.keyCode) {
        case 87:
            y -= 20;
            break;
        case 83:
            y += 20;
            break;
        case 65:
            x -= 20;
            break;
        case 68:
            x += 20;
            break;
    }
    

    //x = Math.floor(Math.random()*450);
    //y = Math.floor(Math.random()*450);


    repaintCanvas();
    ctx.fillStyle = random_rgba();
    repaint();
});


const repaint = () => {
    ctx.fillRect(x, y, 50, 50);
    ctx.strokeRect(x, y, 50, 50);
};

const repaintCanvas = () => {
    ctx.fillStyle = "white";
	ctx.fillRect(0,0,500,500);
}

const random_rgba = () => {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
};

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


ctx.fillStyle = "rgb(236, 34, 120)";

ctx.beginPath();
ctx.moveTo(185, 10);
ctx.lineTo(185, 65);
ctx.lineTo(125, 65);
ctx.fill();


ctx.beginPath();
ctx.moveTo(200, 45);
ctx.lineTo(185, 125);
ctx.stroke();




ctx.fillStyle = "blue";
ctx.beginPath();
ctx.arc(135, 200, 40, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "rgba(245, 100, 162, 0.5)";
ctx.beginPath();
ctx.arc(230, 200, 40, 0, 2 * Math.PI);
ctx.stroke();


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
