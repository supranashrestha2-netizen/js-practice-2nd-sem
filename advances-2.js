// ================================
// Task 1 — this inside object method
// ================================

const user = {
  name: "Suprana",

  login() {
    console.log(this.name + " logged in");
  }
};

user.login();


// ================================
// Task 2 — this losing context
// ================================

const button = {
  name: "Submit Button",

  click() {
    console.log(this.name);
  }
};

const handleClick = button.click;

handleClick(); // undefined

const fixedClick = button.click.bind(button);

fixedClick();


// ================================
// Task 3 — Module Config Example
// ================================

// config.js
export const API_BASE_URL =
  "https://api.example.com";


// ================================
// Task 4 — Utility Functions
// ================================

// utils.js
export function formatCurrency(amount) {
  return "$" + amount;
}

export function generateRandomId() {
  return Math.floor(Math.random() * 1000);
}

export function getTodayDate() {
  return new Date().toDateString();
}


// ================================
// Task 5 — Product Class
// ================================

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getInfo() {
    return (
      this.name +
      " costs $" +
      this.price
    );
  }
}

const p1 = new Product("Laptop", 1200);

console.log(p1.getInfo());


// ================================
// Task 6 — Inheritance Example
// ================================

class FoodProduct extends Product {
  constructor(name, price, expiryDate) {
    super(name, price);

    this.expiryDate = expiryDate;
  }

  showDetails() {
    console.log(
      this.name +
      " expires on " +
      this.expiryDate
    );
  }
}

const milk = new FoodProduct(
  "Milk",
  3,
  "2026-06-01"
);

milk.showDetails();


// ================================
// Task 7 — Promise Example
// ================================

function getSettings() {
  return new Promise((resolve) => {

    setTimeout(() => {

      resolve({
        theme: "dark",
        language: "English"
      });

    }, 2000);

  });
}

getSettings().then((settings) => {
  console.log(settings);
});


// ================================
// Task 8 — async/await Example
// ================================

function fetchUsers() {
  return new Promise((resolve) => {

    setTimeout(() => {

      resolve([
        "Ram",
        "Sita",
        "Hari"
      ]);

    }, 1000);

  });
}

async function showUsers() {
  const users = await fetchUsers();

  console.log(users);
}

showUsers();


// ================================
// Task 9 — try/catch with API Error
// ================================

function fetchData() {
  return new Promise((resolve, reject) => {

    const success = Math.random() > 0.5;

    setTimeout(() => {

      if (success) {
        resolve("Data loaded");
      } else {
        reject("Server Error");
      }

    }, 1000);

  });
}

async function loadData() {
  try {
    const result = await fetchData();

    console.log(result);

  } catch (error) {
    console.log(
      "Unable to fetch data"
    );
  }
}

loadData();


// ================================
// Task 10 — Combine Everything
// ================================

async function fetchProducts() {
  return new Promise((resolve) => {

    setTimeout(() => {

      resolve([
        {
          name: "Phone",
          price: 500
        },
        {
          name: "Tablet",
          price: 700
        }
      ]);

    }, 1000);

  });
}

async function startApp() {

  try {

    console.log(API_BASE_URL);

    const products =
      await fetchProducts();

    products.forEach((item) => {

      const product =
        new Product(
          item.name,
          item.price
        );

      console.log(
        product.name +
        " : " +
        formatCurrency(product.price)
      );

    });

  } catch (error) {

    console.log(
      "Something went wrong"
    );

  }
}

startApp();


// ================================
// Extra Utility Usage
// ================================

console.log(generateRandomId());

console.log(getTodayDate());