window.addEventListener('deviceorientation', trataOrientacion)


function trataOrientacion(e){
    document.getElementById("miimagen").style.transform = "rotateX("+e.alpha + "deg) rotateY("+e.beta + "deg) rotateZ("+e.gamma + "deg)";
    //document.getElementById("miimagen").style.transform = "rotate("+e.beta + "deg)";
    //document.getElementById("miimagen").style.transform = "rotate("+e.gamma + "deg)";
}