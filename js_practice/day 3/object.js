let student = {
    name: "Cripa",
    age: 32,
    contact: 9861957522,
    email: "cripa3456@gmail.com"
};

let entries = Object.entries(student);


// 1. forEach
console.log("----- forEach -----");

entries.forEach(([k, v], index) => {
    console.log(`Index: ${index}, Key: ${k}, Value: ${v}`);
});


// 2. map
console.log("----- map -----");

let modifiedEntries = entries.map(([k, v]) => {
    return [k, v.toString().toUpperCase()];
});

console.log(modifiedEntries);


// 3. filter
console.log("----- filter -----");

// Keep only string values
let filteredEntries = entries.filter(([k, v]) => {
    return typeof v === "string";
});

console.log(filteredEntries);


// 4. reduce
console.log("----- reduce -----");

// Convert entries back to object with uppercase values
let reducedObject = entries.reduce((acc, [k, v]) => {
    acc[k] = v.toString().toUpperCase();
    return acc;
}, {});

console.log(reducedObject);