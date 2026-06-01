// Task 1: Use map to double all numbers in [1, 2, 3, 4, 5]

let numbers1 = [1, 2, 3, 4, 5];

let doubled = numbers1.map(num => num * 2);

console.log("Task 1:", doubled);


// Task 2: Use filter to get all even numbers from [1, 2, 3, 4, 5, 6]

let numbers2 = [1, 2, 3, 4, 5, 6];

let evenNumbers = numbers2.filter(num => num % 2 === 0);

console.log("Task 2:", evenNumbers);


// Task 3: Use reduce to calculate the sum of [10, 20, 30, 40]

let numbers3 = [10, 20, 30, 40];

let sum = numbers3.reduce((total, num) => total + num, 0);

console.log("Task 3:", sum);


// Task 4: Use find to get the first object with age > 18 from an array of user objects

let users1 = [
    { name: "Ram", age: 15 },
    { name: "Sita", age: 20 },
    { name: "Hari", age: 25 }
];

let firstAdult = users1.find(user => user.age > 18);

console.log("Task 4:", firstAdult);


// Task 5: Use forEach to log each element of ["apple", "banana", "orange"] with its index

let fruits = ["apple", "banana", "orange"];

fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});


// Task 6: Use map to extract only names from an array of user objects

let users2 = [
    { name: "Ram", age: 18 },
    { name: "Sita", age: 22 },
    { name: "Hari", age: 25 }
];

let names = users2.map(user => user.name);

console.log("Task 6:", names);


// Task 7: Use filter to get products with price < 100 from an array of product objects

let products = [
    { name: "Pen", price: 20 },
    { name: "Book", price: 150 },
    { name: "Pencil", price: 10 },
    { name: "Bag", price: 500 }
];

let cheapProducts = products.filter(product => product.price < 100);

console.log("Task 7:", cheapProducts);


// Task 8: Use reduce to find the maximum value in an array of numbers

let numbers4 = [12, 45, 7, 89, 23];

let maxValue = numbers4.reduce((max, num) =>
    num > max ? num : max
);

console.log("Task 8:", maxValue);


// Task 9: Use map and filter together to get names of adults (age >= 18) in uppercase

let users3 = [
    { name: "Ram", age: 17 },
    { name: "Sita", age: 20 },
    { name: "Hari", age: 25 }
];

let adultNames = users3
    .filter(user => user.age >= 18)
    .map(user => user.name.toUpperCase());

console.log("Task 9:", adultNames);


// Task 10: Use forEach to build an HTML unordered list string from an array of items

let items = ["Laptop", "Mouse", "Keyboard"];

let html = "<ul>";

items.forEach(item => {
    html += `<li>${item}</li>`;
});

html += "</ul>";

console.log("Task 10:", html);