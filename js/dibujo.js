const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

ctx.strokeRect(50, 40, 40, 40);

ctx.fillStyle = "#1130B8"
ctx.fillRect(200, 300, 100, 170);


ctx.beginPath();
ctx.moveTo(200, 400);
ctx.lineTo(200, 500);
ctx.stroke();