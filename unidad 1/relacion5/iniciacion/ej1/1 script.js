function datos() {

    var nombre = prompt("Introduce tu nombre: ");
    var apellidos = prompt("Introduce tus apellidos: ");
    var edad = prompt("Introduce tu edad: ");

    document.write(`Nombre:${nombre} </br>`);
    document.write(`Apellidos:${apellidos} </br>`);
    document.write(`Edad:${edad} </br>`);

}

datos();