//pure function: those functions which always return the same output for the same input and have no side effects (do not modify any external state or variables)
//example of pure function
let calculateAreaOfRectangle = (length, breadth) => {
    return length*breadth
}
let areaOfRect1 = calculateAreaOfRectangle(5,10)
console.log("area of rectangle:",areaOfRect1)

//impure function: those functions which may return different output for the same input or have side effects (modify external state or variables)
//example of impure function
const PI = 3.14
let calculatePerimeterOfCircle = (radius) => {
    return 2*PI*radius
}
let perimeter1= calculatePerimeterOfCircle(34)
console.log("Perimetere of circle:",perimeter1)