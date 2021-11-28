
//  ejercicio 1

let as = document.getElementsByTagName('a')
console.log(as.length)
console.log(as[as.length - 1].getAttribute('href'))
var cont = 0
for (a of as){
    if(a.getAttribute('href').includes('google')){
        cont ++
    }
}
console.log(cont)
let conte = document.getElementsByTagName('p')[2].children
console.log(conte.length)

// ejercicio 4

function adp(){
    let obj = document.createElement('p')
    obj.innerHTML = 'Nuevo parrafo, random id = ' + Math.random()
    document.body.appendChild(obj)
}

document.getElementById('but').addEventListener('click',adp)

// ejercicio 5

document.getElementById('but').addEventListener('click',addf)

function addf(e){
    e.preventDefault()
    obj = document.createElement('input');
    obj.setAttribute('type','file');
    document.getElementById('form').insertBefore(obj,this);
    document.getElementById('form').insertBefore(document.createElement('br'),this);
};

// ejercicio 6

           var pos = 1

            function cambimg(pas){
                if(pos + pas >= 1 && pos + pas <=6){
                    document.getElementById(pos).style.display='none'
                    pos += pas
                    document.getElementById(pos).style.display='block'
                }
            }

            document.getElementById('next').addEventListener('click',()=>cambimg(1))            
            document.getElementById('prev').addEventListener('click',()=>cambimg(-1))