let x = 2;
const r1 = x++ + x++;
const r2 = ++x + ++x;
const r3 = x++ + ++x;
const r4 = ++x + x++;
let y = 10;
const r5 = y-- + y--;
const r6 = --y + --y;
const r7 = y-- + --y;
const r8 = --y + y--;

console.log("r1: " + r1);
console.log("r2: " + r2);
console.log("r3: " + r3);
console.log("r4: " + r4);
console.log("r5: " + r5);
console.log("r6: " + r6);
console.log("r7: " + r7);
console.log("r8: " + r8);
