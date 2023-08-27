const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');


//pantalones
ctx.fillStyle = "#1130B8"
ctx.fillRect(200, 300, 100, 170);

ctx.fillStyle = "gray";
ctx.fillRect(240, 380, 20, 90);



ctx.fillStyle = "blue";
ctx.beginPath();
ctx.arc(135, 200, 40, 0, 2 * Math.PI);
ctx.fill();


//Zapatos
ctx.fillStyle = "#BA056C"
ctx.fillRect(200, 470, 50, 30);
ctx.fillRect(260, 470, 50, 30);


//Cuepo
ctx.fillStyle = "#29BA05";
ctx.fillRect(200, 150, 100, 150);