// Task 1: Create an array colors with 5 color names and log the third element.

let colors = ["Red", "Blue", "Green", "Yellow", "Purple"];

console.log(colors[2]);


// Task 2: Create an object book with properties title, author, pages, and publishedYear.

let book = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    pages: 208,
    publishedYear: 1988
};

console.log(book);


// Task 3: Add a new property isRead: true to an existing book object immutably (return new object).

let updatedBook = {
    ...book,
    isRead: true
};

console.log(updatedBook);


// Task 4: Create an array of 3 objects, each representing a student with name and grade.

let students = [
    { name: "Ram", grade: "A" },
    { name: "Sita", grade: "B+" },
    { name: "Hari", grade: "A-" }
];

console.log(students);


// Task 5: Create a nested object company with properties name, location, and employees (an array of names).

let company = {
    name: "Tech Solutions",
    location: "Kathmandu",
    employees: ["Ram", "Sita", "Hari"]
};

console.log(company);


// Task 6: From an array numbers = [10, 20, 30], create a new array with each value increased by 5 immutably.

let numbers = [10, 20, 30];

let increasedNumbers = numbers.map(num => num + 5);

console.log(increasedNumbers);


// Task 7: Create an object car and add a new property color immutably.

let car = {
    brand: "Toyota",
    model: "Corolla"
};

let updatedCar = {
    ...car,
    color: "White"
};

console.log(updatedCar);


// Task 8: Create an array shoppingList and add a new item at the beginning immutably.

let shoppingList = ["Milk", "Bread", "Eggs"];

let updatedShoppingList = ["Rice", ...shoppingList];

console.log(updatedShoppingList);


// Task 9: Create an object profile with nested address object containing city and country.

let profile = {
    name: "Suprana",
    address: {
        city: "Kathmandu",
        country: "Nepal"
    }
};

console.log(profile);


// Task 10: From an array of objects products, create a new array with only name and price properties.

let products = [
    {
        name: "Laptop",
        price: 800,
        category: "Electronics"
    },
    {
        name: "Phone",
        price: 500,
        category: "Electronics"
    },
    {
        name: "Bag",
        price: 50,
        category: "Accessories"
    }
];

let productInfo = products.map(product => ({
    name: product.name,
    price: product.price
}));

console.log(productInfo);