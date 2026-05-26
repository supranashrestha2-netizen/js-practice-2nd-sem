//array
let ages = [23,53,56,23,21,23]
console.log("value of index 0: ",ages[0])
console.log(`value of index 3: , $ages[3]`)

//adding elements in array
let arr = ["a","b","c"]
console.log("arr : ",arr)
arr.push("d")       //add element at the end of array
console.log("arr : ", arr)

//updating elements in array
arr[1] = "hello"
console.log("updateed arr : ", arr)

//deleting elements in array
arr.pop()       //remove last element of array
console.log("arr after pop : ", arr)    



//object 
//key: value pair
let person = {
    name: "John",
    age: 30,
    city: "New York",
    "address": "123 Main St"
}
console.log(person.name)   //dot notation
console.log(`name = ${person["name"]}`)  //bracket notation
console.log(`age = ${person.age}`)

console.log(person["address"])
console.log(person.city)
console.log(person)

let student ={
    name : "Alice",
    roll : 101
   }

console.log(student)
//dot notation
student.age = 20
console.log(student)
//updating existing key value pair
student.roll = 54
console.log(student)
//deleting key value pair
delete student.roll
console.log(student)


//bracket notation
student["address"]= "Bhaktapur"
console.log(student)
//updating existing key value pair
student["name"] = "Digital Logic"
console.log(student)

//deleting key value pair
delete student["name"]
console.log(student)

//destructuring
let [a,b,c,d] = [1,2,3,4]
console.log(`a = ${a}, b = ${b}, c = ${c}, d = ${d}`)
let{name, age} = person
console.log(`name = ${name}, age = ${age}`)




