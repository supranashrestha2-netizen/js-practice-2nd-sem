// ===============================
// Task 1: Create class Vehicle
// ===============================
class Vehicle { 
  // Task 2: Add constructor
  constructor(brand) {
    this.brand = brand;
  }

  // Task 3: Add method drive()
  drive() {
    console.log(`${this.brand} vehicle is driving`);
  }
}

// ===============================
// Task 4: Extend class Bike
// ===============================
class Bike extends Vehicle {
  constructor(brand, model) {
    // Call parent constructor
    super(brand);
    this.model = model;
  }

  // Task 5: Override drive()
  drive() {
    console.log(`${this.brand} ${this.model} bike is riding`);
  }
}

// Create Bike object
const bike1 = new Bike("Yamaha", "R15");

bike1.drive();

// ===============================
// Task 6: Create class Student
// ===============================
class Student {
  constructor(name, marks) {
    this.name = name;
    // Task 7: Add marks property
    this.marks = marks;
  }

  // Display method
  display() {
    console.log(`Name: ${this.name}`);
    console.log(`Marks: ${this.marks}`);
  }
}

// ===============================
// Task 8: Inherit class Programmer
// ===============================
class Programmer extends Student {
  constructor(name, marks, language) {
    // Task 9: Call parent method using super()
    super(name, marks);
    this.language = language;
  }
  coding() {
    console.log(`${this.name} codes in ${this.language}`);
  }
}

// Create Programmer object
const p1 = new Programmer("Suprana", 95, "JavaScript");
p1.display();
p1.coding();

// ===============================
// Task 10: Create multiple child classes
// ===============================
class Car extends Vehicle {
  drive() {
    console.log(`${this.brand} car is moving`);
  }
}
class Truck extends Vehicle {
  drive() {
    console.log(`${this.brand} truck is carrying goods`);
  }
}
// Create objects
const car1 = new Car("Toyota");
const truck1 = new Truck("Volvo");
car1.drive();
truck1.drive();













/*Classes and Inheritance
//1. Create class vehicle
class Vehicle {
    constructor(name, color) {
        this.name = name
        this.color = color
    }
    drive(){
        console.log(`Vehicle ${this.name} is driving`)
    }
    
}
//extend vehicle class to create student class
class Student extends Vehicle {
    constructor(name, marks) {
        super(marks)
        this.marks = marks

    }
}*/
