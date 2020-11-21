// Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even numbers.
// Example:
// Input: [2, 4, 7, 11, 15, 16]
function split(list) {
    //
    let odd = [];
    let even = [];
    //[1,2,3]
    list.forEach((number) => {
      if (number % 2) {
        even.push(number);
        return;
      }
      odd.push(number);
    });
    console.log(even, odd);
  }
  split([2, 4, 7, 11, 15, 16]);
  console.log();

