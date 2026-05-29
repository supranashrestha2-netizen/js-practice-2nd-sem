// 1. Try using undefined function
try {
  hello();
} catch (error) {
  console.log(error.message);
}


// 2. Divide number by zero
try {
  let result = 10 / 0;
  console.log(result); // Infinity
} catch (error) {
  console.log(error);
}


// 3. Use custom error message
try {
  let age = -5;

  if (age < 0) {
    throw new Error("Age cannot be negative");
  }

} catch (error) {
  console.log(error.message);
}


// 4. Throw error manually
try {
  throw new Error("Manual error");
} catch (error) {
  console.log(error.message);
}


// 5. Create function with try/catch
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }

    console.log(a / b);

  } catch (error) {
    console.log(error.message);
  }
}

divide(10, 2);
divide(10, 0);


// 6. Multiple catch messages
try {
  let num = "abc";

  if (isNaN(num)) {
    throw new Error("Not a number");
  }

} catch (error) {

  if (error.message === "Not a number") {
    console.log("Please enter valid number");
  } else {
    console.log("Unknown error");
  }
}


// 7. Use finally
try {
  console.log("Try block running");
} catch (error) {
  console.log(error);
} finally {
  console.log("Finally always runs");
}


// 8. Try JSON.parse with invalid JSON
try {
  let data = JSON.parse("{name:'Ram'}");
} catch (error) {
  console.log("Invalid JSON");
}


// 9. Catch error and log name
try {
  test();
} catch (error) {
  console.log(error.name);
}


// 10. Use try/catch in async function
async function fetchData() {
  try {
    let result = await Promise.reject("Server Error");
    console.log(result);

  } catch (error) {
    console.log(error);
  }
}

fetchData();