// push() -> Add item at the end of the array
// pop() -> Remove item at the end of the array
// shift() -> Remove from the start
// unshift() -> Add to start
// concat() -> combining arrays

const fruits = [
  "apples",
  "pomegranate",
  "mango",
  "strawberries",
  "pineapple",
  "grapefruit",
];

console.log(fruits);
fruits.push("banana");
fruits.pop();
fruits.shift();
fruits.unshift("orange");

// CONCAT
const ohFruits = ["apples", "pomegranate", "mango"];
const moreFruits = ["strawberries", "pineapple", "grapefruit"];
let totalFruits = fruits.concat(moreFruits);
let totalFruits1 = totalFruits.sort()
console.log(totalFruits1);
 ohFruits.slice(0,)
console.log(ohFruits);
moreFruits.splice(1,0,"logan")
console.log(moreFruits);
