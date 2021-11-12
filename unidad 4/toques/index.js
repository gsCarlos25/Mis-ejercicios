const iz = document.getElementById('iz');
const de = document.getElementById('de');

img = 1;

function cambiaImagenIz(){
    img -= 1;
    if (img < 0){
        img = 2
    }
    document.getElementById("miimagen").src = img + ".jpg";
}

function cambiaImagenDe(){ 
    img += 1;
    if (img > 2){
        img = 0   
    }
    document.getElementById("miimagen").src = img + ".jpg";
}

iz.onclick = cambiaImagenIz;
de.onclick = cambiaImagenDe;
