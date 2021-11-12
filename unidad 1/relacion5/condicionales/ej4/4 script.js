function descuento(){
    var cantidad = prompt("Introduce un numero: ")
    if(cantidad >= 100){
        document.write(`El descuento es ${cantidad * 0.85}`)
    }

}

descuento()