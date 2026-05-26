//promises
let myPromise = new Promise(
    (resolve, reject) => {  //() => {} this is called call back
        let meroKasam = false
    if (meroKasam){
        resolve("Maile tara jharay hai...")
    }else{
        reject("Maile tara jharna sakina, I am sorry!!")
    }
    }
)

//then, catch, finally
let handlePromise = () => { 
    myPromise.then(
        (data) =>{
            console.log("success:",data)
        }
    ).catch(
        (e) =>{
            console.log("Error:",e)
        }
    ).finally(
        ()=>{
            console.log("finally function called")
        }
    )
}
handlePromise()
