const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');


//Pantalones
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

//Cabeza
ctx.fillRect(235, 120, 30, 30);
ctx.beginPath();
ctx.arc(250, 84, 40, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(212, 80, 15, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(288, 80, 15, 0, 2 * Math.PI);
ctx.fill();
ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(210, 80, 3, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(295, 80, 3, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(240, 73, 5, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(270, 73, 5, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(250, 90, 15, 0, 1 * Math.PI);
ctx.stroke();
ctx.fillStyle = "#7B4107";
ctx.beginPath();
ctx.arc(250, 62, 34, 3.1, 2 * Math.PI);
ctx.fill();
