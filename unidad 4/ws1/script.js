// 1 
const btn = document.querySelector('button');
/* function alerta()
body.innerHTML("Tus muertos"); */
/*
function click(e)
e.onclick = alerta;
  
click();  */
function cambiaColor() {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
  }
btn.onclick = cambiaColor;
