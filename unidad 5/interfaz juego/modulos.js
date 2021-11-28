const PIEDRA = "<img href='./imagenes/piedra.png'>";
const PAPEL = "<img href='./imagenes/papel.png'>";
const TIJERA = "<img href='./imagenes/tijera.png'>";
const EMPATE = 'Ha sido empate';
const GANA1 = 'Gana jugador 1';
const GANA2 = 'Gana jugador 2';
//const RESULTADO = '';
class Jugador {
    constructor(datos_jugador) {
        this.nombre = datos_jugador[0];
        this.rondas_ganadas = datos_jugador[1];
        this.rondas_perdidas = datos_jugador[2];
        this.tirada = null;
    }
    

// devuelve
// 0 si piedra
// 1 si papel
    mano() {
        let tirada = Math.floor(Math.random() * (4 - 1)) + 1; // Saca un valor entre 1 y 3 incluido
        switch (tirada) {
            case 1:
                this.tirada=PIEDRA;
                break;
            case 2:
                this.tirada=PAPEL;
                break;
            case 3:
                this.tirada=TIJERA;
                break;
        }
    }

    resultados() {

        return `El jugador ${this.nombre} ha ganado ${this.rondas_ganadas} y perdido ${this.rondas_perdidas}`
    }
}
// 

class Juego {
    constructor(jugador1, jugador2) {
        this.jugador1 = jugador1;
        this.jugador2 = jugador2;
    }

    ronda() {
        if (this.jugador1.tirada == this.jugador2.tirada) {
            return EMPATE;
        } else if (this.jugador1.tirada == PIEDRA && this.jugador2.tirada == TIJERA) {
            this.jugador1.rondas_ganadas++;
            this.jugador2.rondas_perdidas++;
            return GANA1;
        } else if (this.jugador1.tirada == PIEDRA && this.jugador2.tirada == PAPEL) {
            this.jugador2.rondas_ganadas++;
            this.jugador1.rondas_perdidas++;
            return GANA2 ;
        } else if (this.jugador1.tirada == PAPEL && this.jugador2.tirada == PIEDRA) {
            this.jugador1.rondas_ganadas++;
            this.jugador2.rondas_perdidas++;
            return GANA1;
        } else if (this.jugador1.tirada == PAPEL && this.jugador2.tirada == TIJERA) {
            this.jugador2.rondas_ganadas++;
            this.jugador1.rondas_perdidas++;
            return(GANA2);
        } else if (this.jugador1.tirada == TIJERA && this.jugador2.tirada == PAPEL) {
            this.jugador1.rondas_ganadas++;
            this.jugador2.rondas_perdidas++;
            return(GANA1);
        } else if (this.jugador1.tirada == TIJERA && this.jugador2.tirada == PIEDRA) {
            this.jugador2.rondas_ganadas++;
            this.jugador1.rondas_perdidas++;
            return(GANA2);
        }
    }
}


export {Jugador, Juego};