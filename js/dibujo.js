const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');


//pantalones
ctx.fillStyle = "#1130B8"
ctx.fillRect(200, 300, 100, 170);

ctx.fillStyle = "gray";
ctx.fillRect(240, 380, 20, 90);


//Zapatos
ctx.fillStyle = "#BA056C"
ctx.fillRect(200, 470, 50, 30);
ctx.fillRect(260, 470, 50, 30);


//Cuerpo
ctx.fillStyle = "#29BA05";
ctx.fillRect(200, 150, 100, 150);
ctx.beginPath();
ctx.arc(200,190,40,0,Math.PI,true);
ctx.fill();
ctx.beginPath();
ctx.arc(295,190,40,0,Math.PI,true);
ctx.fill();
ctx.fillStyle = "#F9D69D";
ctx.fillRect(170, 190, 25, 90);
ctx.fillRect(300, 190, 25, 90);
ctx.beginPath();
ctx.arc(183, 275, 15, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(313, 275, 15, 0, 2 * Math.PI);
ctx.fill();