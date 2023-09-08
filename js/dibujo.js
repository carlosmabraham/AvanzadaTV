const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Funcion para dibujar los cuadrados
const pintarCuadrados = () => {
  let colorCuadrado = "rgb(211, 84, 0)";
  let canvasWidth = canvas.width;
  let canvasHeight = canvas.height;

  let anchoCuadro = canvasWidth / 20;
  let altoCuadro = canvasHeight / 20;

  for(let j = 16; j < 20; j++) {

    let y = j * altoCuadro;

    for (let i = 0; i < 20; i++) {
      let x = i * anchoCuadro;
      
      if( j % 2 != 0 ) {
        if(i % 2 != 0) {
          colorCuadrado = "rgb(211, 84, 0)";
        } else {
          colorCuadrado = "rgb(71, 30, 3)";
        }
      } else {
        if(i % 2 != 0) {
          colorCuadrado = "rgb(71, 30, 3)";
        } else {
          colorCuadrado = "rgb(211, 84, 0)";
        }
      }
      
      ctx.fillStyle = colorCuadrado;
      ctx.fillRect(x, y, anchoCuadro, altoCuadro);
    }
  };
};

// Funcion para dibujar el pasto
const pintarPasto = () => {
  ctx.fillStyle = "rgb(102, 211, 0)";
  ctx.fillRect(0, 371, 500, 15);
  ctx.fillStyle = "rgb(77, 153, 6)";
  ctx.fillRect(0, 386, 500, 15);
  ctx.fillStyle = "rgb(77, 153, 6)";
  ctx.fillRect(0, 401, 500, 15);
  ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
  ctx.fillRect(0, 401, 500, 35);
};

// Funcion para dibujar los aros
const pintarAro = (x, y) => {
  ctx.strokeStyle = "rgb(238, 245, 15)";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI*2);
  ctx.stroke();
};

// Funcion para pintar girasol
const pintarGirasol = () => {
  ctx.fillStyle = "rgb(77, 153, 6)";
  ctx.fillRect(423, 306, 7, 65);
  ctx.fillStyle = "rgb(238, 245, 15)";
  ctx.beginPath();
  ctx.arc(426, 265, 40, 0, Math.PI*2);
  ctx.fill();
  ctx.fillStyle = "rgb(14, 106, 1)";
  ctx.beginPath();
  ctx.arc(426, 265, 20, 0, Math.PI*2);
  ctx.fill();
};

// Funcion para pintar palmera
const pintarPalmeraCoordenadas = (x, y) => {
  ctx.fillStyle = "rgb(110, 44, 0)";
  ctx.fillRect(x, y, 12, 250);
  ctx.fillStyle = "rgb(60, 95, 14)";
  ctx.fillRect(x -100, y - 31, 100, 30);
  ctx.beginPath();
  ctx.moveTo(x -150, y - 31);
  ctx.lineTo(x - 100, y + 9);
  ctx.lineTo(x - 100, y - 31);
  ctx.lineTo(x - 150, y - 31);
  ctx.fill();
  ctx.fillRect(x + 10, y - 31, 100, 30);
  ctx.beginPath();
  ctx.moveTo(x + 95, y - 21);
  ctx.lineTo(x +135, y + 19);
  ctx.lineTo(x + 145, y - 31);
  ctx.lineTo(x + 95, y - 31);
  ctx.fill();
  ctx.fillRect(x - 10, y - 1, 30, 90);
  ctx.beginPath();
  ctx.moveTo(x - 20, y + 94);
  ctx.lineTo(x + 30, y + 114);
  ctx.lineTo(x + 20, y + 74);
  ctx.lineTo(x - 20, y + 94);
  ctx.fill();
  ctx.fillRect(x -10, y - 81, 30, 80);
  ctx.beginPath();
  ctx.moveTo(x -20, y - 76);
  ctx.lineTo(x + 30, y - 56);
  ctx.lineTo(x + 20, y - 96);
  ctx.lineTo(x - 20, y - 76);
  ctx.fill();
};




pintarCuadrados();
pintarPasto();
pintarAro( 70, 335 );
pintarAro( 160, 335 );
pintarAro( 250, 335 );
pintarGirasol();
pintarPalmeraCoordenadas(320, 121);
pintarPalmeraCoordenadas(-15, 121);