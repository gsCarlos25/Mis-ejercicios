/* Ejercicio 1
 */
/* let fecha = new Date();

document.write(`Año ${fecha.getFullYear()} </br>`);
document.write(`Mes ${fecha.getMonth()} </br>`);
document.write(`Día ${fecha.getDay()} </br>`);
document.write(`Hora ${fecha.getHours()} </br>`);
document.write(`Minutos ${fecha.getMinutes()} </br>`);
document.write(`Segundos ${fecha.getSeconds()} </br>`); */

/* ejercicio 2 */

/* let fechaHoy = new Date()

document.write(fechaHoy + "</br>");

let fecha85 = new Date(fechaHoy.setDate(fechaHoy.getDate() + 85));

document.write(`Mas 85 dias: ${fecha85} </br>`); */
/* function sumarDias(fecha, dias){
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
  } */

/* let fecha187 = new Date(fechaHoy.setDate(fechaHoy.getDate() - 187));
document.write(`Menos 187 dias: ${fecha187} </br>`);

let fecha2años = new Date(fecha85.setFullYear(fecha85.getFullYear() + 2));
document.write(`Mas 2 años: ${fecha2años} </br>`);

let fecha24h = new Date(fecha187.setHours(fecha187.getHours() + 24));
document.write(`Más 24 horas: ${fecha24h} </br>`);

let fechaResto = new Date(fecha85 - fecha187);
document.write(`Resto ${fechaResto}`);
 */

/* ejercicio 3
 */
/* setTimeout(muestraSeg,1000);
var segundos = 60;

function muestraSeg()
{
    document.write(segundos--);
    document.write("</br>");
    if (segundos>=0)
        setTimeout(muestraSeg,1000);
} */

/* ejercicio 5 */

function imprimeHora(){
    let horaActual = new Date();
    let horas = horaActual.getHours();
    let minutos = horaActual.getMinutes();
    let segundos = horaActual.getSeconds();
    
    document.body.innerHTML = (horas + ' : ' + minutos + ' : ' + segundos + '<br>');
}

for (let i = 0; i < 100; i++){
    let actualizaReloj = setTimeout(imprimeHora, (i*1000));
}