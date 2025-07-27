// Creating an object to represent a user
const user = {
    firstName: "Krishna",
    lastName: "Pipaliya",
    age: 25,
    isStudent: false,
    // You can even have an array inside an object!
    hobbies: ["reading", "gaming", "coding"]
  };
  
  // Accessing properties with dot notation
  console.log(user.firstName); // "John"
  console.log(user.age); // 30
  
  // Accessing a value from the array inside the object
  console.log(user.hobbies[2]); // "coding"
  
  // Adding a new property
  user.city = "New York";
  console.log(user.city); // "New York"