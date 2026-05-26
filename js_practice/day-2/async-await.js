//async: Asynchrounous , await
let myPromise = new Promise(
    (resolve, reject) => {  //() => {} this is called call back
        let timroKasam = false
        if (timroKasam) {
            resolve("Maile tara jharay hai...")
        } else {
            reject("Maile tara jharna sakina, I am sorry!!")
        }
    }
)
let asyncExample = async () => {
    try {
        console.log("Before await:")
        let data = await myPromise
        console.log('data:', data)
    }
    catch (e) {
        console.log("Error:", e)
    }
    finally {
        console.log("Finally block called")
    }

}
asyncExample()

let fetchTodos = async () => {
    try{
    let res = await fetch('https://jsonplaceholder.typicode.com/todos')
    let data = await res.json()
    console.log(data)
    }
    catch(e){
        console.log("Error:",e)
    }

        
}
fetchTodos()