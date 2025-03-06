// Finding the Most Frequent Element in an Array
// Problem: Find the most frequent element in an array

let arr = [10, 20, 30, 20,30, 30, 40, 50];

function findMostFrequant(arr) {
  let frequencyMap = {};
  let count = 0;
  let MostFrequantElement = 0;

  for (let num of arr) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    if (frequencyMap[num] > count) {
      count = frequencyMap[num];
      MostFrequantElement = num;
    }
  }
  return MostFrequantElement;
}

console.log("most frequent Element :", findMostFrequant(arr));
