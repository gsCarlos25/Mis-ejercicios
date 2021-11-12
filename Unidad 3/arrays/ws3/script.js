// ejercicio 1

// largest number
/* let arr = [0,1,3,4,56,3,2,3];
temp = 0;

arr.forEach((element)=>{
    if (temp < element)
        temp = element;
});

console.log(temp); */

//  longest string
/* let arrstring = ['hola','gol','bu','carlos'];
let str ='';
arrstring.forEach((element)=>{
    if (str.length < element.length)
        str = element;
});
console.log(str); */

// even numbers
let arr = [1,2,3,4,5,6,7,8,9];
let par;
let odd;
arr.forEach((element)=>{
    if (element % 2 == 0)
        par += ` ${element}`
    else    
    odd += ` ${element}`
});

console.log("par " + par + " impar " + odd);