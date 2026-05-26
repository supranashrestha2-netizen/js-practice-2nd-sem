// ---------- math.js ----------

// 1. Export a variable
export const pi = 3.14;

// 2. Export a function
export function add(a, b) {
  return a + b;
}

// 4. Export default
export default function greet() {
  console.log("Hello");
}

// 6. Export multiple variables
export const name = "Suprana";
export const age = 20;

// 8. Export class
export class Student {
  constructor(name) {
    this.name = name;
  }
}

// 9. Export an object
export const user = {
  city: "Kathmandu"
};



// ---------- app.js ----------

// 3. Import a function
import { add } from "./math.js";

console.log(add(2, 3));


// 5. Import default
import greet from "./math.js";

greet();


// 7. Rename module on import
import { pi as PI } from "./math.js";

console.log(PI);


// 10. Import everything using *
import * as allData from "./math.js";

console.log(allData.pi);
console.log(allData.name);
console.log(allData.user);