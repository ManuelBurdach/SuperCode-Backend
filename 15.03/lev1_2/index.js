import { names, numbers } from "./data.js";
import {
  firstOfArray,
  notTheLastOfArray,
  lastOfArray,
  notFirstOfArray,
  deleteItemOfArray,
  uniqueItemsOfArray,
  sumOfArray,
} from "./function.js";

console.log("1. " + firstOfArray(names));
console.log("1. " + firstOfArray(numbers));

console.log("2. " + notTheLastOfArray(names));
console.log("2. " + notTheLastOfArray(numbers));

console.log("3. " + lastOfArray(names));
console.log("3. " + lastOfArray(numbers));

console.log("4. " + notFirstOfArray(names));
console.log("4. " + notFirstOfArray(numbers));

console.log("5. " + deleteItemOfArray(names, "Christian"));
console.log("5. " + deleteItemOfArray(numbers, 1));

console.log("6. " + uniqueItemsOfArray(names));
console.log("6. " + uniqueItemsOfArray(numbers));

console.log("6. " + sumOfArray(numbers));
