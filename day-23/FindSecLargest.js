// Finding the Second Largest Number in an Array
// Problem: Find the second largest number in an array



function sortArr(arr)
{
    let sorted =[...new Set(arr)].sort((a,b)=> b-a);
    return sorted.length >1 ? sorted[1]:null;
}

console.log(sortArr([10,20,30,30,4,6]));
