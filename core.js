/*Task 1 – Variables and Template Literals
Create two variables, firstName and lastName, and combine them into a greeting 
message using template literals. Log the message.*/

let firstName = "Suprana"
let lastName = "Shrestha"
let greeting = `Hello, ${firstName} ${lastName}! Welcome to JavaScript.`
console.log(greeting)

/*Task 2 – let and const Scope
Create a let variable inside a block {} and try to
access it outside. Then do the same with a const variable. Observe the errors.*/
{
    let blockvar = "I am a block variable"
    const blockconst = "I am a block constant"
    console.log(blockvar) //accessible inside the block
    console.log(blockconst) //accessible inside the block
}
//console.log(blockvar) //blockvar is not accessible outside the block
//console.log(blockconst) //blockconst is not accessible outside the block

/*Task 3 – Arrow Function Simple
Write an arrow function greet that takes a name and returns "Hello, !". 
Test it with your name.  */
let greet = (name) => {
    return `Hello, ${name}!`
}
console.log (greet("Suprana"))


/*Task 4 – Arrow Function with Multiple Parameters
Write an arrow function multiply that takes two numbers and returns
their product. Log the result for 5 and 6.*/
let multiply = (a,b) => { 
    return a*b
}
console.log("Multiplication =",multiply(5,6))


/*Task 5 – Object Destructuring
Create an object person with keys name, age, and country.Destructure the 
object to extract name and country into variables and log them. */
let person = {
    name: "Sanvi",
    age : 15,
    country : "Nepal"
}
let {name,country} = person //destructuring object
console.log("Name: ",name) 
console.log("Country: ",country)


/* Task 6 – Array Destructuring
Create an array [10, 20, 30, 40]. Destructure the 
first two elements into variables and log them.*/
let arr = [10,20,30,40]
let {first,second} = arr //destructuring array 
console.log("First element: ",first) //first is undefined because we are trying to destructure an array using object destructuring syntax
console.log("Second element: ",second) //ARRAY CANNOT BE DESTRUCTURED USING OBJECT DESTRUCTURING SYNTAX
//correct way to destructure an array
let [firstElement,secondElement] = arr
console.log("First element: ",firstElement)
console.log("Second element: ",secondElement)

/*Task 7 – Default Parameters
Write a function sayHello with a parameter name that defaults to 
"Guest" if not provided. Log the output when called with and without 
an argument.*/
let sayHello = (name = "Guest") => {
    return `Hello, ${name}!`
}
console.log(sayHello()) //without argument, will use default value "Guest"
console.log(sayHello("Suprana")) //with argument, will use provided value "Suprana"

/*Task 8 – Rest Operator (Sum of Numbers)
Write a function sumAll using the rest operator (...numbers) that 
calculates the sum of any number of inputs. Test with 1, 2, 3, 4.*/
//using for loop
function sumAll(...numbers) {
    let sum = 0
    for(let num of numbers){
        sum += num
    }
    return sum
}
console.log("Sum of 1, 2, 3, 4:", sumAll(1, 2, 3, 4))

//reduce method
function sumAll(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0)
}       
console.log("Sum of 1, 2, 3, 4:", sumAll(1, 2, 3, 4))


/*Task 9 – Spread Operator with Arrays
Create two arrays [1, 2, 3] and [4, 5]. Merge them into a new array 
using the spread operator and log the result. */
let arr1 =[1,2,3]
let arr2 = [4,5]
let mergedarray = [...arr1,...arr2] //merging two arrays using spread operator, mergedarr = [1,2,3,4,5]
console.log("Merged Array: ",mergedarray)


/* Task 10 – Merge and Destructure Objects
Create two objects: {a: 1, b: 2} and {c: 3, d: 4}. Merge them using 
the spread operator. Then destructure the merged object to extract 
a and d and log them.*/
let obj1 = {
    a: 1,
    b: 2
}
let obj2 ={
    c: 3,
    d: 4
}
let mergeobj = {...obj1,...obj2}
console.log("Merged Object: ",mergeobj) 
let {a,d} = mergeobj
console.log("a: ",a) //a: 1 
console.log("d: ",d) //d: 4  









