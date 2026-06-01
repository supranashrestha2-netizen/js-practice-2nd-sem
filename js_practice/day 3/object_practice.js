let student ={
    name : "Cripa",
    age: 32,
    contact: 9861957522,
    email: "cripa3456@gmail.com" 
}
//converting to keys array
let keys = Object.keys(student)
console.log("Keys:",keys)
let values = Object.values(student)
console.log("values:",values)
//converting to entries [key,values]
let entries = Object.entries(student)
console.log("entries:", entries)

//destructure [a,b] =[45,67]
//entries loop
entries.forEach(
    ([k,v],index) => {
        console.log("k:",k,"v:",v)
    }
)

//entries map
let modifiedEntries = entries.map(
    ([k,v],index) => {
        console.log("k:",k,"v",v)
        return [k,v.toString().toUpperCase()]
    }
)
console.log("modified entries:", modifiedEntries)

