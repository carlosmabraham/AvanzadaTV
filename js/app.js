const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');


ctx.fillStyle = "rgb(53, 129, 220)";
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

/*
ctx.beginPath();
ctx.moveTo(200, 45);
ctx.lineTo(185, 125);
ctx.stroke();
*/



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

let grd = ctx.createLinearGradient(140, 170, 200, 100);
grd.addColorStop(0, "#F564A2");
grd.addColorStop(1, "#F9DBE8");

ctx.fillStyle = grd;
ctx.fillRect(140, 170, 200, 100);

/*
let grd2 = ctx.createRadialGradient(240, 320, 5, 255, 340, 100);
grd2.addColorStop(0, "#F24B0D");
//grd2.addColorStop(0.5, "#F12E81");
grd2.addColorStop(1, "##9C104C");

ctx.fillStyle = grd2;
ctx.fillRect( 240, 320, 200, 100 );

*/