// Removing Duplicate Values from an Array

// Problem: Remove duplicate values from an array

let arr=[10,10 ,20,20,20 ,30 ,40 ,50 ,50];

let remDupl=[...new Set(arr)];

console.log(remDupl);
