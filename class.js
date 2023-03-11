
class RotaryMachine{
    constructor(time, speed){
        this.time = time;
        this.speed = speed;
    }
    rotation(){
        return this.time * this.speed;
    }
}

class User {
    constructor(){}
}
//console.log(User);

//console.log(RotaryMachine);
const rotate = new RotaryMachine(23, 10);

const totalTime = rotate.rotation()
//console.log(typeof totalTime);
//console.log(typeof RotaryMachine);
console.log(rotate.constructor);