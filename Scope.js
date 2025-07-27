const globalVar = "I am global"; // Global variable

function someFunction() {
  const localVar = "I am local"; // Local variable
  console.log(globalVar); // Can access global variables from inside a function
  console.log(localVar);  // Can access local variables from inside the same function
}

someFunction();
// Output of the function call:
// "I am global"
// "I am local"

console.log(globalVar); // "I am global"
//console.log(localVar); // This will cause an error! You can't access a local variable from the outside.