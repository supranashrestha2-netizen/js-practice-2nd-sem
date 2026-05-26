//for(initilization; condition; increment/decrement){
//for Each loop
//for in loop
//for of loop
//map, filter, reduce

//array loop
    //for each loop
    let prices = [100.23, 200, 99.25, 150.50]
    prices.forEach(
        (price,index) => {
            console.log(`Index: ${index} , Price: ${price}`) 
        }
    )

    //map using each loop 
    //updating each element by adding 5 and print new array
    let res = prices.map(
        (e,i) => {
            return e+5
        }
    )
    console.log("Updated prices: ", res)

    //filter
    //display the prices greater than 105
    filter = prices.filter(
        (e) => {
            return e>105
        }
    )
    console.log("Filtered prices:", filter) 

    //reduce
    total=prices.reduce(
        (acc, e) => {    //accumulator, current value , acc = 0 initially 
            return acc+e 
        }, 100 //initial value of accumulator
    )   
    console.log("Total price: ", total)

    //sort
    let arr = [5,2,9,1]

    arr.sort()

    console.log(arr)

    //find
    let nums = [10,20,30,40]
    let res = nums.find(e => e>25)
    console.log(res)

    //for loop
    for(let i=0; i<4; i++){
        let price = prices[i]
        console.log(`Index: ${i} , Price: ${price}`)
    }

//HOMEWORK
//find , reverse , sort
//Keys loop,print key + value
//values loop, print values
//enries loop, print each key and value pair


//object loop
let school = {
    name: "Shikshyalaya",
    address: "Lokanthali",
    Phone: "1234567890"
}
console.log(school)
//Key array 
let keys = Object.keys(school)
console.log("Keys array: ", keys)
//using for in loop to print key and value
for(let key in school){
    console.log("key: ", key, " value: ", school[key])
}

//Value array
let values = Object.values(school)
console.log("Values array: ", values)

//pair array
let pair = Object.entries(school)
console.log("Pair array: ", pair)


//example of for in and for of loop
let ages = [23, 45, 12, 67, 34]
//usimg for in
for(let e in ages){
    console.log("e: ", e)   //e is index
}

for(let e of ages){
    console.log("e: ", e)   //e is element
}



//destructuring array and object
let fruits = ["apple", "banana", "orange"]
//destructuring array
let [a,b,c] = fruits
console.log(`a = ${a}, b = ${b}, c = ${c}`)

let book = {
    name: "The Great Gatsby",
    price: 500,
    author: "F. Scott Fitzgerald"
}
//destructuring object
let{author,name} = book
console.log(`Author: ${author}, Name: ${name}`)


//rest and spread operator
let temp = [10,20,30,40,50]
console.log("Temperature array: ", temp)
//using spread operator
console.log("After spread = ",...temp)

//merge two arrays using spread operator
let arr1 = [1,2,3]
let mergedArr = [...arr1,...temp]
console.log("Merged array: ", mergedArr)

//rest operator
let add = (...values) => {
    let res = values.reduce(
        (acc,e) => acc+e   
    )
    console.log("res= ", res)    
}
add(1,2,3,4,5)