const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Sky
ctx.fillStyle = "rgb(154, 249, 246)";
ctx.fillRect(0, 0, 500,500);

// Platform1
ctx.fillStyle = "rgb(247, 169, 69)";
ctx.fillRect(0, 451, 500, 49);

// Platform2
ctx.fillStyle = "rgb(252, 196, 190)";
ctx.fillRect(0, 430, 500, 20);
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.strokeRect(0, 430, 500, 20);

//Block1
ctx.lineWidth = 2;
ctx.strokeRect(50, 200, 35, 35);
ctx.fillStyle = "rgb(255, 141, 20)";
ctx.fillRect(50, 200, 35, 35);
ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(57,205, 1, 10, Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(77,205, 1, 10, Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(57,230, 1, 10, Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(77,230, 1, 10, Math.PI);
ctx.fill();
//Block2
ctx.lineWidth = 2;
ctx.strokeRect(130, 50, 35, 35);
ctx.fillStyle = "rgb(255, 141, 20)";
ctx.fillRect(130, 50, 35, 35);
ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(137,55, 1, 10, Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(157,55, 1, 10, Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(137,80, 1, 10, Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(157,80, 1, 10, Math.PI);
ctx.fill();
ctx.fillStyle = "rgb(255, 221, 185)";
ctx.fillRect(130, 60, 9, 9);
ctx.fillRect(157, 57, 6, 6);
//Block3
ctx.lineWidth = 2;
ctx.strokeRect(165, 50, 35, 35);
ctx.fillStyle = "rgb(255, 141, 20)";
ctx.fillRect(165, 50, 35, 35);
ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(172,55, 1, 10, Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(193,55, 1, 10, Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(172,80, 1, 10, Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(193,80, 1, 10, Math.PI);
ctx.fill();
//Block4
ctx.lineWidth = 2;
ctx.strokeRect(425, 110, 35, 35);
ctx.fillStyle = "rgb(255, 141, 20)";
ctx.fillRect(425, 110, 35, 35);
ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(432,115, 1, 10, Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(453,115, 1, 10, Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(432,140, 1, 10, Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(453,140, 1, 10, Math.PI);
ctx.fill();
ctx.fillStyle = "rgb(255, 221, 185)";
ctx.fillRect(425, 120, 9, 9);
ctx.fillRect(453, 117, 6, 6);

//Platform-block1
ctx.fillStyle = "rgb(70, 174, 213)";
ctx.fillRect(200, 278, 80, 150);
ctx.strokeRect(200, 278, 80, 150);
ctx.fillStyle = "rgb(120, 187, 212)";
ctx.fillRect(202, 280, 71, 141);
ctx.fillStyle = "black";
ctx.fillRect(280, 300, 8, 130);
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(210,288, 6, 10, Math.PI);
ctx.fill();
ctx.beginPath();
ctx.moveTo(205, 285);
ctx.lineTo(215, 292);
ctx.stroke();
ctx.beginPath();
ctx.arc(270,288, 6, 10, Math.PI);
ctx.fill();
ctx.beginPath();
ctx.moveTo(274, 285);
ctx.lineTo(265, 292);
ctx.stroke();
ctx.beginPath();
ctx.arc(270,417, 6, 10, Math.PI);
ctx.fill();
ctx.beginPath();
ctx.moveTo(274, 414);
ctx.lineTo(265, 421);
ctx.stroke();

//Platform-block2
ctx.fillStyle = "rgb(250, 197, 149)";
ctx.fillRect(150, 338, 90, 90);
ctx.strokeRect(150, 338, 90, 90);
ctx.fillStyle = "rgb(247, 217, 190)";
ctx.fillRect(152, 340, 81, 81);
ctx.fillStyle = "black";
ctx.fillRect(240, 360, 8, 70);
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(160,350, 6, 10, Math.PI);
ctx.fill();
ctx.beginPath();
ctx.moveTo(155, 347);
ctx.lineTo(165, 354);
ctx.stroke();
ctx.beginPath();
ctx.arc(230,350, 6, 10, Math.PI);
ctx.fill();
ctx.beginPath();
ctx.moveTo(234, 347);
ctx.lineTo(225, 354);
ctx.stroke();
ctx.beginPath();
ctx.arc(160,419, 6, 10, Math.PI);
ctx.fill();
ctx.beginPath();
ctx.moveTo(155, 416);
ctx.lineTo(165, 423);
ctx.stroke();
ctx.beginPath();
ctx.arc(230,419, 6, 10, Math.PI);
ctx.fill();
ctx.beginPath();
ctx.moveTo(234, 416);
ctx.lineTo(225, 423);
ctx.stroke();

//Platform-block3
ctx.fillStyle = "rgb(15, 222, 27)";
ctx.fillRect(410, 338, 100, 90);
ctx.strokeRect(410, 338,100, 90);
ctx.fillStyle = "rgb(129, 222, 135)";
ctx.fillRect(412, 340, 91, 81);
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(422,419, 6, 10, Math.PI);
ctx.fill();
ctx.beginPath();
ctx.moveTo(426, 416);
ctx.lineTo(417, 423);
ctx.stroke();
ctx.beginPath();
ctx.arc(422,350, 6, 10, Math.PI);
ctx.fill();
ctx.beginPath();
ctx.moveTo(426, 347);
ctx.lineTo(417, 354);
ctx.stroke();

//Tube
ctx.fillStyle = "rgb(12, 128, 5)";
ctx.fillRect(328, 378, 50, 50);
ctx.strokeRect(328, 378, 50, 50);
ctx.fillRect(320, 347, 65, 30);
ctx.strokeRect(320, 347, 65, 30);

//Three
ctx.strokeStyle = "rgb(9, 101, 22)";
ctx.fillStyle = "rgb(77, 211, 96)";
ctx.beginPath();
ctx.moveTo(20, 428);
ctx.lineTo(100, 428);
ctx.arc(90,412,20,1,1.5*Math.PI, true);
ctx.arc(65,395,30,0,Math.PI, true);
ctx.arc(35,413,20,15,1.5*Math.PI);
ctx.stroke();
ctx.fill();



