console.clear();

// EXERCISE 1
// Extract only the course name from the company object.
// Make sure to export your variable as in the example below to make the tests work.

const company = {
  name: "neuefische",
  course: "Web Development",
  location: "Hamburg",
};

export const { course } = company;
// example: export const {value1} = myObject;

// EXERCISE 2
// We have an object called 'user'.
// Write the destructuring assignment that reads:
//  2.1: 'name' property into the variable 'name'.
//  2.2: 'years' property into the variable 'age'.
//  2.3: 'isAdmin' property into the variable 'isAdmin' (false, if no such property exists)

export const user = { name: "John", years: 30 };
export const { name: name, years: age, isAdmin = false } = user;
console.log(user);
// EXERCISE 3
// Extract the variables from the dog object and
// rename them like "dogName", "dogBreed", and "dogAge", respectively.

export const dog = {
  name: "Pluto",
  breed: "husky",
  age: 5,
};
export const {
  name: dogName = "Pluto",
  breed: dogBreed = "husky",
  age: dogAge = 5,
} = dog;
console.log(dog);
console.log(dogName, dogBreed, dogAge);

// EXERCISE 4
// Extract the 'lastName' property from the person object as "personLastName".
// Store all other properties in an object called "moreInformation".

export const person = {
  lastName: "Main",
  age: 24,
  firstName: "Alex",
};
export const { lastName: personLastName = "Main" } = person;
export const moreInformation = { age: 24, firstName: "Alex" };
