// Create a function that checks an array for prime numbers then inserts any pimes into a new array.                               
// Example 1:                                                                                                                                       Input: numArray = [1,2,3,4,5,6,7,8,9,10]
// Output: primeArray = [2,3,5,7]
// Example 2:												Input: numArray = [10, 18, 19, 29, 33, 35, 47, 66, 83] 
// Output: primeArray = [19 ,29 ,47 , 83]

// const array = []
// function isPrime (num){
//     // let array = [1,3,4,2,67,88,100]       
//     for (let i = 2; i <= num/2; i++){
//         if (num % i === 0){
//             return false;
//         }
//         return true;
//     }

//     }


// console.log()

function primeNum(n) {
    for (let i = 2; i <= n / 2; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  function createArr(num) {
    const arr = [];
    let i = 2;
    while (arr.length < num) {
      if (primeNum(i)) {
        arr.push(i);
      }
      i = i === 2 ? i + 1 : i + 2;
    }
    return arr;
  }
  console.log(createArr(6));