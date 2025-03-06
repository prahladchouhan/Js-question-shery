// // 4. Star Pattern (Nested Loops)
// // Problem: Create a nested loop to print a star pattern.
// *
// **
// ***
// ****
// *****

for (let i = 1; i <= 5; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "*";
  }
  console.log(stars);
}
