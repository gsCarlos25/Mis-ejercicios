// ejercicio 5
/* function paresImpares (){
    let numeros = new Array();
    for (i=0;i<=100;i++)      
        numeros.splice(i,0,(Math.floor(Math.random() * (1000 - 1) + 1)));

    let ordenados = [[],[]];
    for (i of numeros){
        if (i%2 == 0)
            ordenados[0].splice(0,0,i);
        else
            ordenados[1].splice(0,0,i);
    }
    return ordenados
}

paresImpares(); */

// ejercicio 7

let array = [1,2,3,4,5,6,7,8,9,10];


function a(array){
    for(i=0;i<array.length;i++)
        array[i]=0;
    return  array
};
function b(array){
    for (i=0;i<array.length;i++)
        array[i] = 1;
    return array
};
function c(array){
    return array.join(' ')
};






