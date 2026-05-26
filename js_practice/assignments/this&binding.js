// 1. Create object with name and method using this
const person = {
  name: "Suprana",
  greet() {
    console.log("Hello " + this.name);
  }
};

person.greet();


// 2. Call method from another variable and see undefined
const sayHello = person.greet;
sayHello(); // undefined


// 3. Fix with .bind()
const fixedHello = person.greet.bind(person);
fixedHello();


// 4. Create two objects and use same method with .bind()
function intro() {
  console.log("I am " + this.name);
}

const user1 = { name: "Ram" };
const user2 = { name: "Sita" };

const intro1 = intro.bind(user1);
const intro2 = intro.bind(user2);

intro1();
intro2();


// 5. Use this inside a click handler (browser)
const button = {
  name: "Submit",
  click() {
    console.log(this.name);
  }
};

// Example:
// document.querySelector("button").onclick = button.click.bind(button);


// 6. Write function in strict mode and log this
"use strict";

function test() {
  console.log(this);
}

test(); // undefined


// 7. Convert normal function to arrow and see difference
const obj = {
  name: "JavaScript",

  normal: function () {
    console.log(this.name);
  },

  arrow: () => {
    console.log(this);
  }
};

obj.normal(); // JavaScript
obj.arrow();  // window/global object


// 8. Create object with nested object and log this
const student = {
  name: "Hari",

  info: {
    age: 20,
    show() {
      console.log(this.age);
    }
  }
};

student.info.show();


// 9. Use .call() to borrow method
const car1 = {
  brand: "Toyota",
  show() {
    console.log(this.brand);
  }
};

const car2 = {
  brand: "Honda"
};

car1.show.call(car2);


// 10. Use .apply() to borrow method
const bike1 = {
  brand: "Yamaha",
  details(city) {
    console.log(this.brand + " " + city);
  }
};

const bike2 = {
  brand: "Suzuki"
};

bike1.details.apply(bike2, ["Kathmandu"]);