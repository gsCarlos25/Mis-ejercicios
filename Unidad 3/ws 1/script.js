// 1 

/* num1 = prompt("numero1")
num2 = prompt("numero2")
num3 = prompt("numero3")
num4 = prompt("numero4")
numeros = [num1,num2,num3,num4]
function maximo(numeros){
    maximo = 0
    for (i=0;i<numeros.length;i++){
        if (numeros[i]>maximo){
            maximo = numeros[i];
        }

    }
    return maximo
}

document.write(`El maximo es: ${maximo(numeros)}`) */

// 2

function lanzamiento(){
    valorDado = Math.floor(Math.random()*7)
    return valorDado
}

document.write(`El numero es ${lanzamiento()}`)