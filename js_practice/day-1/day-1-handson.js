//Hands on 1
let arr = [1,2,3,4,5]
//using rest operator 
let calculate = (...num) =>{
    let res = num.reduce(
        (acc,element) => acc+element
    )
    console.log("Sum of numbers=", res)

}
//calling function using spread operator
calculate(...arr)


let object1 = {
    name: "Alice",
    age: 24
}
let object2 = {
    city: "Los Angeles",
    country: "USA"      
}
//spread operator on object (key:value pair
let withoutSpread = {object1}
console.log("1) without spread operator: ", withoutSpread)
let withSpread = {...object1}
console.log("2) with spread operator: ", withSpread)

//merging two objects using spread operator
let mergedObject = {...object1,...object2}
console.log("3) Merged object: ", mergedObject)

