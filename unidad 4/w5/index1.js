// Ejercicio 1 worksheet 5 tema 4


//validarMayuscula: El parámetro debe contener al menos un carácter en mayúscula

function mayuscula(form){
    let val = /[A-Z]/;
    let comp = form.test(val)
    return comp
}



//validarCaracteresEspeciales: El parámetro debe contener al menos uno de los siguientes caracteres: !@#$%^&

function validarCaracteresEspeciales(str){
    let mayus = /[!@#$%^&]/;
    return mayus.test(str);

}


//validarCorreo: El parámetro debe tener el formato correcto de un email

function validarCorreo(email){
    let validacion = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    return validacion.test(email);

}


//validarTarjetaCredito: El parámetro debe tener el formato correcto de una tarjeta de crédito

function validarTarjetaCredito(tarj){
    let visa = /^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/;
    let mastercard = /^5[1-5]\d{2}-?\d{4}-?\d{4}-?\d{4}$/;
    tipo = prompt('Tipo de tarjeta(VISA o MASTERCARD)');
    if (tipo == "VISA")
        return visa.test(tarjeta)
    else if (tipo == "MASTERCARD"){
        return mastercard.test(tarjeta)
    }

}


//validarLongitud: El parámetro debe tener al menos 8 caracteres.

function validarLongitud(str){
    let validacion = /^\W{8}$/;
    return validacion.test(str);

}

//validarNumero: El parámetro debe contener al menos un dígito.

function validarNumero(str){
    let validacion = /\d{1}/;
    return validacion.test(str);

}