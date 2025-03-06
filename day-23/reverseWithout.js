// Reversing an Array Without reverse()s
// Problem: Reverse an array without using .reverse().

let arr = [10, 20, 30, 40, 50, 60];

function reverseWithout(arr) {
  let reverse = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
  }
  return reverse;
}

let rev = reverseWithout(arr);
console.log(rev);
