# frontEndBootcamp
1. Fill. Write a function that creates a new array with given values

/** 
  * Task description: Write a method that creates a new array with given values 
  * Expected Result: (3, 'a') => ['a', 'a', 'a'] 
  * Task Complexity: 1 of 5 
  * @param {number} arraySize - size of array 
  * @param {?} value - value to fill 
  * @returns {Array} 
*/
const fill = (arraySize, value) => {
 throw new Error('Put your solution here');
}
const data = 3;
const valueToFill = 'a';
console.log(fill(data, valueToFill)) // ['a', 'a', 'a']
“Fill” function solution.

2. Reverse. Write a function that reverts the input array. Please, do not use array.reverse(); to make this task more enjoyable.

/** 
  * Task description: Write a method that reverts input array 
  * Expected Result: [1, 2, 3] => [3, 2, 1] 
  * Task Complexity: 1 of 5 
  * @param {Array} array - Array of any elements 
  * @returns {Array} 
*/
const reverse = (array) => {
 throw new Error('Put your solution here');
}
const data = [1, 2, 3];
console.log(reverse(data)); // [3, 2, 1]
“Reverse” function solution.

3. Compact. Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null

/** 
  * Task description: Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null 
  * Expected Result: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3] 
  * Task Complexity: 1 of 5 
  * @param {Array} array - An array of any elements 
  * @returns {Array} 
*/
const compact = (array) => {
 throw new Error('Put your solution here');
}
const data = [0, 1, false, 2, undefined, '', 3, null];
console.log(compact(data)) // [1, 2, 3]
“Compact” function solution.

4. From Pairs. Write a method that returns an object composed of key-value pairs.

/** 
  * Task description: Write a method that returns an object composed of key-value pairs. 
  * Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 } 
  * Task Complexity: 2 of 5 
  * @param {Array} array - a deep array of pairs 
  * @returns {Array} 
*/
const fromPairs = (array) => {
 throw new Error('Put your solution here');
}
const data = [['a', 1], ['b', 2]];
console.log(fromPairs(data)) // { 'a': 1, 'b': 2 }
“From Pairs” function solution.

5. Without. The method should return an array without listed values. Let’s try to find a solution when input data only primitive data types.

/** 
  * Task description: Write a method that returns an array without listed values 
  * Expected Result: [1, 2, 3, 1, 2] without 1, 2 => [3] 
  * Task Complexity: 2 of 5 
  * @param {Array} array - Array of primitive data types 
  * @param {?} args list of values to remove 
  * @returns {Array} 
*/
const without = (array, ...args) => {
 throw new Error('Put your solution here');
}
const data = [1, 2, 3, 1, 2];
console.log(without(data, 1, 2)); // [3]
“Without” function solution.

6. Unique. Write a method that returns a duplicate-free array

/** 
  * Task description: Write a method that returns a duplicate-free array 
  * Expected Result: Duplicate-free array [1, 2, 3, 1, 2] => [1, 2, 3] 
  * Task Complexity: 2 of 5 
  * @param {Array<string | number>} array - Array of primitive data types 
  * @returns {Array} 
*/
const unique = (array) => {
 throw new Error('Put your solution here');
}
const data = [1, 2, 1, 2, 3];
console.log(unique(data)); // [1, 2, 3]
“Unique” function solution.

7. IsEqual. Write a function that compares two arrays and returns true if they are identical.

/** 
  * Task description: Write a method that makes a shallow compare of two arrays and returns true if they are identical. 
  * Expected Result: ([1, 2, 3], [1, 2, 3]) => true 
  * Task Complexity: 2 of 5 
  * @param {Array} firstArray - Array of primitive data types 
  * @param {Array} secondArray - Array of primitive data types 
  * @returns {boolean} 
*/
const isEqual = (firstArray, secondArray) => {
  throw new Error('Put your solution here');
}
const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 5];
const arr4 = [1, 2, 3, 4, 5];
console.log(isEqual(arr1, arr2)); // true
console.log(isEqual(arr1, arr3)); // false
console.log(isEqual(arr1, arr4)); // false
“IsEqual” function solution.

8. Flatten. Write a function that turns a deep array into a plain array. Please, do not use array.flat(); to make this task more enjoyable.

/** 
  * Task description: Write a method that turns a deep array into a plain array 
  * Expected Result: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5] 
  * Task complexity: 3 of 5 
  * @param {Array} array - A deep array 
  * @returns {Array} 
*/
const flatten = (array) => {
 throw new Error('Put your solution here');
}
const data = [1, 2, [3, 4, [5]]];
console.log(flatten(data)); // [1, 2, 3, 4, 5]
“Flatten” function solution.

9. Chunk. Write a method that splits an array into parts of determined size

/** 
  * Task description: Write a method that splits an array into parts of determined size 
  * Expected Result: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]] 
  * Task complexity: 3 of 5 
  * @param {Array} array - An array of any elements 
  * @param {number} size - size of chunks 
  * @returns {Array} 
*/
const chunk = (array, size) => {
 throw new Error('Put your solution here');
}
const data = [1, 2, 3, 4, 5, 6, 7];
console.log(chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7]]
console.log(chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7]]
“Chunk” function solution.

10. Intersection. Create an array of unique values that are included in all given arrays. Let’s start with primitive data types.

/** 
  * Task description: Write a method that creates an array of unique values that are included in all given arrays 
  * Expected Result: ([1, 2], [2, 3]) => [2] 
  * Task complexity: 4 of 5 
  * @param {?} arrays - Arrays of primitive data types 
  * @returns {Array} 
*/
const intersection = (...arrays) => {
 throw new Error('Put your solution here');
}
const arr1 = [1, 2];
const arr2 = [2, 3];
const arr3 = ['a', 'b'];
const arr4 = ['b', 'c'];
const arr5 = ['b', 'e', 'c'];
const arr6 = ['b', 'b', 'e'];
const arr7 = ['b', 'c', 'e'];
const arr8 = ['b', 'e', 'c'];
console.log(intersection(arr1, arr2)) // [2]
console.log(intersection(arr3, arr4, arr5)) // ['b']
console.log(intersection(arr6, arr7, arr8)) // ['b', 'e']
