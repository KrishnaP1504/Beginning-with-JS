// A function that takes two numbers (parameters) and returns their sum.
function addNumbers(num1, num2) {
    const sum = num1 + num2;
    return sum; // Send the result back
  }
  
  // Calling the function with two arguments (5 and 10)
  const result = addNumbers(5, 10);
  console.log("The result is:", result); // "The result is: 15"
  
  // You can reuse it easily!
  const anotherResult = addNumbers(100, 50);
  console.log("Another result is:", anotherResult); // "Another result is: 150"