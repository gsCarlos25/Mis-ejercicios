/* ejercicio 1 */

/* function apellidos(){
    var nombre = prompt("Nombre: ")
    var apellidos = prompt("Apellidos: ")
    if (nombre == "Ricardo"){
        alert(apellidos)
    }
    else{
        document.write(apellidos)
    }
}
apellidos() */

/* ejercicio 2 */

function jubilacion(){
    var edad = prompt("Edad: ")
    if (edad > 66){
        document.write("Puede jubilarse ya que tiene "+(edad)+" años")
    }
    else{
        document.write(`Con ${edad} años no puede jubilarse.`)
    }
}
jubilacion()