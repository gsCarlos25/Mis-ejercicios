function saludo() {
    var edad = prompt("Edad: ")
    var localidad = prompt("Localidad de nacimiento: ")
    if (edad > 25 && localidad == "Madrid"){
        document.write("Enhorabuena. ")
    }
    else{
        document.write("Lo sentimos.")
    }
}
saludo()