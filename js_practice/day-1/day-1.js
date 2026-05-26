console.log("Hello This is my first js code");
// Variables (var , let , const)->dynamically typed datatypes
var a = "Hello World";      //global scope or function scope
console.log(a);
a = 10;
console.log(a);
let b = "True";     //let and const are block scope
console.log(b);
const c = 14.12;
console.log(c);

//Function scope example
function add(a,b){
    var x = 10;   //function scope
    console.log("x: ",x);
    return a+b;
}
console.log(add(5, 10));

let res = add(5,10)
console.log("res: ",res)

//arrow function
let mul = (a,b,c) => {
    console.log("multiply: ",a*b*c)

        //block scope example
    if(true){
        console.log("Inside if block")
        var u ="Welcome"
        let z = "Home"

    }
    console.log("u = ",u)
    //z is block scope variable so cannot be accessed outside the if block
    //console.log(z= ",z")

}
mul(34,2,5)


//template literals
let msg = "Always be in discipline and stay consistent"
let name = "Suprana"
let fullmsg = "Full messsage = " +msg + " " + name;
console.log(fullmsg)

//using template literals
let fullmsg2 = `Full message2 = ${msg} ${name}`;
console.log(fullmsg2)



/*let name = "John";
let age = 30;
console.log("My name is " + name + " and I am " + age + " years old.");
console.log(`My name is ${name} and I am ${age} years old.`);*/

//default parameters
let calculate = (x,y=1) => {
    return x/y
}
let calculateRes = calculate(23)
console.log("Calculate Res: ",calculateRes)
let res2 = calculate(45,23)
console.log("Res 2: ",res2)


let dispaly = (price = 0) => {
    console.log("Price: ", price)
}
dispaly()   //undefined
dispaly(100)    //100


