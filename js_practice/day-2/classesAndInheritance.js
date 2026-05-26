//classes => blueprint properties=>variables  feature=>method/function
//object => Instance of class 

class Car{
    //constructor:initial setup for the class
    constructor(brand,name,noOfWheel,price){
        this.brand = brand;
        this.name = name;
        this.noOfWheel = noOfWheel;
        this.price = price;
    }
    //feature/method
    start(){
        console.log(`${this.name}has started`)
    }

    horn(){
        console.log(`The car,${this.name} sounds peep peep.It's price is ${this.price} and has ${this.noOfWheel} Wheels.`)
    }
}

//creating instance or object of car
let fordObj = new Car("ford","Mustang",4, 400000)
console.log("Ford car brand:",fordObj.name)
fordObj.start()
fordObj.horn()

let bydObj = new Car("BYD", "Han",4, 300000)
console.log("BYD car price:", bydObj.price)
bydObj.start()
bydObj.horn()

