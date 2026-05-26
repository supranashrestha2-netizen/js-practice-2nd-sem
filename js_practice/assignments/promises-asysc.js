// 1. Create promise that resolves
const successPromise = new Promise((resolve, reject) => {
  resolve("Promise resolved");
});


// 2. Create promise that rejects
const failPromise = new Promise((resolve, reject) => {
  reject("Promise rejected");
});


// 3. Use .then()
successPromise.then((result) => {
  console.log(result);
});


// 4. Use .catch()
failPromise.catch((error) => {
  console.log(error);
});


// 5. Convert to async/await
async function showMessage() {
  const result = await successPromise;
  console.log(result);
}

showMessage();


// 6. Wait 2 seconds using setTimeout promise
function waitTwoSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("2 seconds completed");
    }, 2000);
  });
}


// 7. Create function that returns promise
function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num > 0) {
      resolve("Positive number");
    } else {
      reject("Negative number");
    }
  });
}

checkNumber(5).then(console.log).catch(console.log);


// 8. Chain promises
waitTwoSeconds()
  .then((msg) => {
    console.log(msg);
    return "Next step";
  })
  .then((data) => {
    console.log(data);
  });


// 9. Use await inside async function
async function getData() {
  const data = await waitTwoSeconds();
  console.log(data);
}

getData();


// 10. Use multiple awaits
async function multipleAwait() {
  const first = await Promise.resolve("First");
  const second = await Promise.resolve("Second");

  console.log(first);
  console.log(second);
}

multipleAwait();