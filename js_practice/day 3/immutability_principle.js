//immutability principle: Always use the copy of original data so that original data remains unchanged or may not modified refers to the immutability principle. It is a programming concept that emphasizes the idea of creating new data structures instead of modifying existing ones. This principle helps to avoid unintended side effects and makes code easier to understand and maintain.

let array = [1,2,3,4,5]
//array[3] = 20
let temp = [...array]
temp[3] = 20
console.log("original array:",array)
console.log("Modified array:",temp)

//in object
let obj = {
    name: "Cripa"}
    //let tempObj = obj;
    let tempObj= {...obj}
    tempObj.name = 