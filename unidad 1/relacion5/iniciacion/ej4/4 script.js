function saludo() {
    var edad = prompt("Edad: ");
    var nombre = prompt("Nombre: ");
    var apellidos = prompt("Apellidos: ");
    var ciclo= prompt("Ciclo: ");
    document.write(`Edad: ${edad}</br>Nombre: ${nombre}</br>Apellidos: ${apellidos}</br>Ciclo: ${ciclo}`);
    
}
saludo()