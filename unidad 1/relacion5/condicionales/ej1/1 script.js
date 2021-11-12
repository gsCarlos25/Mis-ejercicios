/* 1.Crea un script que determine si un número introducido
por el usuario es par */

function ParImpar()
{
    var n = prompt("Ingresa un numero:", "");
    if (n % 2 == 0)
    {
        document.write ("Your number is par");

    }else {
        document.write ("Your number is impar");
    }
}

ParImpar();