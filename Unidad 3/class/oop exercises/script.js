

//task 1

/* class persona{
    constructor(n,e){
        this.nombre = n;
        this.edad = e;
        this.stomach = [];
    }
    eat(someFood){
        if (this.stomach.length < 10)
            this.stomach.push(someFood)
    }
    poops(){
        for (i=0;i<this.stomach.length;i++){
            this.stomach.pop()
    }   }
    toString(){
        return this.nombre + ", " + this.edad
    }
}

yo = new persona("Carlos",19);
yo.eat("cacahuetes");
document.write(yo.toString()) */

//task 2

class car{
    constructor(m,milesPerGallon){
        this.model = m;
        this.milesPerGallon = milesPerGallon;
        this.tank = 0;
        this.odometer = 0;
    }
    fill(gallons){
        this.tank += gallons;
    }
    drive(distance){
        autonomy = this.milesPerGallon * this.tank
        if (autonomy >= distance){
            this.odometer += distance;
            this.tank -= (distance / this.milesPerGallon);
        }
        else{
            this.tank = 0;
            this.odometer += autonomy;
            return "I ran out of fuel at " + this.odometer +" miles!"
        }
    }
}

