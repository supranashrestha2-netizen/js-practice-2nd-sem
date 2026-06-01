// Task 1: Update an object's age from 25 to 26 immutably using spread operator.

let person = {
    name: "Ram",
    age: 25
};

let updatedPerson = {
    ...person,
    age: 26
};

console.log(updatedPerson);


// Task 2: Add a new hobby to a person's hobbies array immutably.

let person2 = {
    name: "Sita",
    hobbies: ["Reading", "Drawing"]
};

let updatedPerson2 = {
    ...person2,
    hobbies: [...person2.hobbies, "Cooking"]
};

console.log(updatedPerson2);


// Task 3: Remove the last element from an array immutably.

let numbers = [10, 20, 30, 40];

let newNumbers = numbers.slice(0, -1);

console.log(newNumbers);


// Task 4: Replace the second element in an array immutably.

let fruits = ["Apple", "Banana", "Orange"];

let updatedFruits = [
    fruits[0],
    "Mango",
    fruits[2]
];

console.log(updatedFruits);


// Task 5: Change a nested property address.city in an object immutably.

let profile = {
    name: "Hari",
    address: {
        city: "Pokhara",
        country: "Nepal"
    }
};

let updatedProfile = {
    ...profile,
    address: {
        ...profile.address,
        city: "Kathmandu"
    }
};

console.log(updatedProfile);


// Task 6: Add a new key-value pair to an object immutably.

let student = {
    name: "Gita",
    grade: "A"
};

let updatedStudent = {
    ...student,
    age: 20
};

console.log(updatedStudent);


// Task 7: Remove a property deletedAt from an object immutably.

let user = {
    id: 1,
    name: "Ram",
    deletedAt: "2025-01-01"
};

let { deletedAt, ...activeUser } = user;

console.log(activeUser);


// Task 8: Merge two arrays immutably into a new array.

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let mergedArray = [...arr1, ...arr2];

console.log(mergedArray);


// Task 9: Merge two objects immutably into a new object.

let obj1 = {
    name: "Ram"
};

let obj2 = {
    age: 22
};

let mergedObject = {
    ...obj1,
    ...obj2
};

console.log(mergedObject);


// Task 10: Update a specific object in an array of objects immutably (by id).

let users = [
    { id: 1, name: "Ram" },
    { id: 2, name: "Sita" },
    { id: 3, name: "Hari" }
];

let updatedUsers = users.map(user =>
    user.id === 2
        ? { ...user, name: "Gita" }
        : user
);

console.log(updatedUsers);