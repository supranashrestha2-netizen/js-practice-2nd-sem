//inheritance 
class Vehicle{
    constructor(name){
        this.name = name //property

    }
    move(){
        console.log(`Vehicle ${this.name} can move`)
    }

}
//inheriting vechile class
class Car extends Vehicle{ //for inheritance
    constructor(name,color){
        //providing value to the parent constructor
        super(name) //imp
        this.color = color

    }
    start(){
        console.log(`Car ${this.name} has started`)
    }
    display(){
        console.log(`Car color is: ${this.color}`)
    }
}
let fordObj = new Car("Ford V!", "Yellow")
fordObj.move()
fordObj.start()
fordObj.display()
    

