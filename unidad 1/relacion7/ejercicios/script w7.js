/* Ejercicio 5
 */
/* function sumEveryOther(vector) {
    let suma = 0;
    for (valor in vector){
        if (valor % 2 ===0)
            suma += vector[valor];
    }
    return suma;
}

misuma = [1,2,3,4,5];
document.write(sumEveryOther(misuma)+"</br>");
document.write("Hola"); */

/* ejercicio 1
 */

/* function sumEveryOther(vector) {
    let suma = 0;
    for (valor in vector){
        suma += vector[valor];
    }
    return suma;
}

misuma = [1,2,3,4,5];
document.write(sumEveryOther(misuma)+"</br>"); */

/* ejercicio 2 */

/* function addOnlyNums(valor){
    let suma = 0;
    for(num of valor)
        if (typeof num == "number")
            suma += num;
    return suma
}


cadena = [1,2,"hola",true,10]
document.write(addOnlyNums(cadena));
 */

function countTheArgs(...aRayy){
    return (aRayy.length)
}

document.write(countTheArgs("perro","m","f","vaca"));