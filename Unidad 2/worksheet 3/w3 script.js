
/* ejercicio 1 a*/


/* function invierteCadena(cad_arg){
    
    return cad_arg.split("").reverse().join("");
}

var sss = invierteCadena("hola me llamo juan")
document.write(sss); */

/* ejercicio 1 b */

function invierteCadena(cad_arg){


    return cad_arg.split(" ").reverse().join(" ");
}

var sss = invierteCadena("hola me llamo juan")
document.write(sss);

/* ejercicio 1 c */

/*
2. Definir una funci n que muestre informaci n sobre una cadena de texto que se ó ó
le pasa como argumento. A partir de la cadena que se le pasa, la funci n ó
determina si esa cadena est formada s lo por may sculas, s lo por min sculas o á ó ú ó ú
por una mezcla de ambas.
*/

// cadena = prompt('Introduce una cadena')

// function info(cadena){
//     if (cadena == cadena.toLowerCase()){
//         document.write('La cadena está en minuscula')
//     } else if (cadena == cadena.toUpperCase()){
//         document.write('La cadena esta en mayusculas')
//     }else {
//         document.write('La cadena esta formada por una mezcla de mayusculas y minusculas')
//     }
// }

// info(cadena)

/*
3. Realizar un funci n que permita localizar todas las apariciones de una subcadena ó
dentro de otra.
*/

// cadena = prompt('Introduce una cadena')
// cadena2 = prompt('Introduce una segunda cadena')
// document.write(`Las cadenas introducidas son: "${cadena}" y "${cadena2}" <br> `)

// function apariciones(cadena,cadena2){
//     if (cadena.includes(cadena2) == true){
//         document.write("La segunda cadena aparece en la primera")
//     }
// }

// apariciones(cadena,cadena2)

/*

/* 4. Crea una funci n que tomando una cadena de texto como entrada coloque todas ó
sus consonantes al principio y todas sus vocales al final de la misma, eliminando
los blancos.
*/ 

// cadena = prompt('Introduce una cadena')
// document.write(`La cadena introducida es: "${cadena}" <br> `)


// function ordenavocales(cadena){
//     vocales = ['a','e','i','o','u','A','E','I','O','U']
//     separada = cadena.split('')
//     vocalescadena = []
//     consonantescadena = []
//     for (i=0 ; i<separada.length ; i++){
//         if (vocales.includes(cadena[i])){
//             vocalescadena.push(cadena[i])
//         }
//         else if (vocales.includes(separada[i]) == false){
//             consonantescadena.push(separada[i])

//         }
        
//     }
//     cadenavocales= vocalescadena.join().replaceAll(',',' ')
//     cadenaconsonantes= consonantescadena.join().replaceAll(',',' ')
//     return ((cadenaconsonantes + cadenavocales).replaceAll(' ' , ''))
    

// }
// document.write(ordenavocales(cadena))

/*
5. Desarrolla una funci n que elimine los caracteres repetidos de una cadena de ó
texto, incluidos los blancos.
*/

// cadena = "Desarrolla una funcion que elimine los caracteres repetidos de una cadena de texto"

// function eliminaRepetidos(cadena){
//     conjunto= new Set(cadena);

//     for (elemento of conjunto){
//         document.write(elemento)
//     }
// }

// eliminaRepetidos(cadena)

/* ejercicio 6  */

// cadena = prompt('Introduce una cadena')
// cadena2 = prompt('Introduce una segunda cadena')
// document.write(`Las cadenas introducidas son: "${cadena}" y "${cadena2}" <br> `)

/*  function subcadena(cadena,cadena2){
     if (cadena.includes(cadena2) == true){
         posicion = cadena.lastIndexOf(cadena2)
         document.write("La segunda cadena aparece en la primera y empieza en la posición " + posicion)
     }
 }

subcadena(cadena,cadena2) */

/*
7. Desarrolla una funci n que tomando como entrada una cadena de texto nos ó
devuelva si es o no un pal ndromo. í
*/

// cadena = prompt('Introduce una cadena')

// function palindormo(cadena){
//     lista = cadena.replaceAll(' ','').toLowerCase().split('').toString()  
//     //Primero quitamos los espacios en blanco, despues lo ponemos minuscula, a continuacion se pasa a array y por ultimo se pasa a cadena
//     copialista = cadena.replaceAll(' ','').toLowerCase().split('')
//     inversa = copialista.reverse().toString()

//     if (lista == inversa){
//         document.write("Es un palindromo")
//     }
//     else{
//         document.write("No es un palindromo")
//     }


// }

// palindormo(cadena)

/*
8. Implementa una funci n que tomando como entrada una cadena de texto sea ó
capaz de contabilizar el n mero de palabras. Ten en cuenta que entre dos palabras ú
puede haber m s de 1 blanco, e incluso pueden aparecer al principio o final de á
ésta.
*/

// cadena = prompt('Introduce una cadena')

// function cuentapalabras(cadena){
//     lista=cadena.replaceAll('  ', ' ').split(' ')
//     document.write(`La cadena "${cadena}" tiene ${lista.length} palabras`)


// }

// cuentapalabras(cadena)

/* ejrcicio 9
 */

/* function cuadrado(){
    cadena = 'SALUTATIONS';
    document.write('<table>');
    document.write('<tr>');
    for (let i = 0; i < cadena.length; i++){
        document.write(`<td>${cadena[i]}</td>`);
    } //Fila 0 de la tabla
    document.write('</tr> <br>');
    for (let i = 1; i < cadena.length - 1; i++){
        document.write('<tr>');
        document.write(`<td>${cadena[i]}</td>`); //Escribir primer carácter de la fila
        for (let j = 2; j < cadena.length; j++){
            document.write('<td>&nbsp;&nbsp;&nbsp;</td>'); //Escribir espacios en blanco
        }
        document.write(`<td>${cadena[cadena.length - i - 1]}</td>`); //Escribir último carácter de la fila
        document.write('</tr>');
    } //Filas i = 1 - i = length - 1
    document.write('<br>');
    document.write('<tr>');
    for (let i = cadena.length - 1; i >= 0; i--){ //bucle for inverso
        document.write(`<td>${cadena[i]}</td>`);
    } //Última fila de la tabla
    document.write('</tr>');
    document.write('</table>');
}
cuadrado(); */