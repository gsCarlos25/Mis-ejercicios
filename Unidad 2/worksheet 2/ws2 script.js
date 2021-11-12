/* ejercicio 1
 */

/* document.write(Math.random() + "</br>");
document.write((Math.random()*(101)+100) + "</br>");

function aleatorio(valor) {
    return (Math.random(valor))
}

valor = [1,20];
document.write(aleatorio(valor)) */

/* EJERCICIO 2 */

let angulo = prompt("Ángulo");
function prop_ang(ang){
    let seno = Math.sin(ang);
    let coseno = Math.cos(ang);
    let tangente = Math.tan(ang);
    return (seno,coseno,tangente)
}

document.write(prop_ang(angulo));
/* ejercicio 7 */

/* function tabla_seno(lim){
    for (num = 0; num <=lim; num++){
        seno = 0;
        seno = Math.sin(num);
        document.write(`<tr>
        <td>${num}<td>
        <td>${seno}</td>
        </tr>`)
    }
}

tabla_seno(10); */

/* ejercicio 5 */

/* let a = ('Introduzca primer coeficiente');
let b = ('Introduzca segundo coeficiente');
let c = ('Introduzca término independiente');

parseInt(a);
parseInt(b);
parseInt(c);

let sol1 = -b+sqrt((b*b)-(4*a*c))/(2*a);
let sol1 = -b-sqrt((b*b)-(4*a*c))/(2*a); */

/* ejercicio 6 */

/* let num = prompt('Introduzca un número');
let pow = prompt('Introduzca la potencia');
let copia = num;

for (let i = 0; i < pow; i++){
    num *= num;
}

document.write(copia + ' elevado a ' + pow + ' es ' + num); */