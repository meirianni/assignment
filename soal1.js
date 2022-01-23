// Jika 2100 = 1267650600228229401496703205376 dan jumlah partisi 3 dari bilangan tersebut adalah 126 + 765 + 060 + 022 + 822 + 940 + 149 + 670 + 320 + 537 + 6 = 4417, berapakah jumlah partisi 3 bilangan dari hasil 21592?

// const jumlah = (bil) => {
//   let a = bil.pow(1592);
//   console.log(object)
// };

let a = BigInt(2 ** 1000 + 2 ** 592);

let b = a.toLocaleString("en").split(",");
let numberArray = [];
length = b.length;
for (let i = 0; i < length; i++) {
  numberArray.push(parseInt(b[i]));
}
// console.log(numberArray);
let sum = numberArray.reduce((a, b) => {
  return a + b;
}, 0);
console.log(sum);
