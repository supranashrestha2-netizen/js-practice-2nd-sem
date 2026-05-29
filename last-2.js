// Task 10 — Combine everything


// config.js
export const API_URL =
  "https://api.example.com";


// utils.js
export function formatPrice(price) {
  return "$" + price;
}


// product.js
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getInfo() {
    return this.name + " - $" + this.price;
  }
}


// app.js
import { API_URL } from "./config.js";
import { formatPrice } from "./utils.js";

async function fetchProducts() {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve([
        { name: "Phone", price: 500 },
        { name: "Laptop", price: 1200 }
      ]);
    }, 1000);

  });
}

async function startApp() {
  try {
    console.log(API_URL);

    const products = await fetchProducts();

    products.forEach((item) => {

      const product = new Product(
        item.name,
        item.price
      );

      console.log(
        product.name +
        " : " +
        formatPrice(product.price)
      );

    });

  } catch (error) {
    console.log("Something went wrong");
  }
}

startApp();