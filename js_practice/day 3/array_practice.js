let myArr = [1,2,3,4,5]
//normal loop
for(let i=0; i< myArr.length; i++){
    let ele = myArr[i]
    console.log("ele: ",ele,"index:",i)
}

//forEach loop
myArr.forEach(
    //callback function
    (ele,i) => {
        console.log("inside forEach:",i,"Ele:",ele)
    }
)

//map loop
let modifiedArr = myArr.map(
    //callback function
    (ele,i) =>{
        console.log("inside map: ",i,"Ele:",ele)
        return ele*10
    }
)
console.log("modified arr:",modifiedArr)


let fruits = ["Coconut", "Mango","Apple"]
//find
let findFruit = fruits.find(
    (ele)=> {
        return ele.toLowerCase() =="apple"
    }
)
console.log("find fruits:",findFruit)
//filter
let filteredFruits = fruits.filter(
    (ele) => ele.toLocaleLowerCase().includes("a")
)
console.log("filtered fruits:",filteredFruits)

//reduce: summation or combination of an element
let ages = [23,43,54,6]
let multiplyRes = ages.reduce(
    (accumulator,ele)=>{
        return ele * accumulator
    } 
    ,2
)
console.log("acc:",multiplyRes)



