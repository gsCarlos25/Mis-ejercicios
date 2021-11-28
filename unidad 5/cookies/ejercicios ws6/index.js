
window.onload=()=>{
    document.getElementById("crear").addEventListener("click",crearCookie);
    document.getElementById("borrar").addEventListener("click",borrarCookie);
    document.getElementById("mostrar").addEventListener("click",mostrarCookie);
    document.getElementById("comprobar").addEventListener("click",comprobarCookie);

}

function crearCookie(nombre){
    document.cookie = `usuario=${nombre}; max-age=300`;
}
function borrarCookie(){
    document.cookie = "usuario=carlos; max-age=0";
}
function mostrarCookie(){
    console.log(document.cookie);
}

function saludar(){
    let ind1 = document.cookie.split('=');
    let ind2 = ind1[1].split(';');
    let nombre = ind2[0];
    alert(`Hola ${nombre}`);
}

function comprobarCookie(){
    if(document.cookie.indexOf('=') == -1){
        let usuario = prompt('Nombre de usuario');
        crearCookie(usuario);
        alert(`Bienvenido ${usuario}`);
    }
    else
        saludar()
}