//Create a function that calculates 
// the sum of numbers in an array using rest and spread operators.
/*let calculate = [1, 2, 3, 4, 5]
let calculate = (...arr) =>{
    let res = arr1.reduce(
        (acc,e) => acc+e   
    )
    console.log("res= ", res)    
}*/

//function using rest operator
let sumArray = (...numbers) => {

    console.log("Numbers: ", numbers)

    let total = numbers.reduce(
        (acc,e) => {
            return acc + e
        },0
    )

    console.log("Total sum: ", total)
}
//array
let arr = [10,20,30,40]
//using spread operator
sumArray(...arr)

//Write a function to merge and destructure objects.
let obj1 = {
    name: "John",
    age: 30
}   
let obj2 = {
    city: "New York",
    country: "USA"
}   
let mergeObjects = (o1,o2) => {
    let merged = {...o1,...o2}
    console.log("Merged object: ", merged)  
    //destructuring merged object
    let {name, city} = merged
    console.log(`Name: ${name}, City: ${city}`)
}
mergeObjects(obj1,obj2)


