//higher order function: a function that takes another function as an argument or returns a function as a result

//Example
let applyOperation = (arr,operation)=>{
    return arr.map(operation)
}
let myNumbers = [34,54,23,78,25]
let double = applyOperation(
    myNumbers,
    (e,i) => e*e
)
console.log("doubled numbers:",double)

let cubeRes = applyOperation(
    myNumbers,
    (e,i) => e*e*e
)
console.log("cubed numbers:",cubeRes)

