pokemon = [{nombre='Picachu',tipo='electrico'},
            {nombre='snorlax',tipo='normal'},
            {nombre='charmander',tipo='fuego'},
            {nombre='zapdos',tipo='electrico'},
            {nombre='sceptile',tipo='planta'}]

(pokemon.sort((a,b)=>{
    if (a.tipo > b.tipo)
        return 1
    else if (a.tipo < b.tipo)
        return -1
    else
        if (a.nombre > b.nombre)
            return 1
        else if (a.nombre < b.nombre)
            return -1
        else
            return 0
}))

for (i of pokemon)
    document.write(pokemon[i])

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