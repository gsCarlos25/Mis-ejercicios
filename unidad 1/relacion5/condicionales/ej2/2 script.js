function mayor_ed(){
    var edad = prompt("Di tu edad: ");
    if (edad > 18){
        document.write(`Eres mayor de edad</br>`);
    }
    else{
        document.write(`Eres menor de edad.`)
    }
}
mayor_ed()