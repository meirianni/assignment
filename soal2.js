// Diketahui terdapat daftar bilangan bulat positif kurang dari sama dengan 20 (n ≤ 20) yang berkelipatan 3 atau 5. Jumlah dari bilangan tersebut adalah 98

// Carilah jumlah dari kelipatan 17 atau 71 di bawah 100000 yang telah di-mod dengan 51681

//jawab

function bilBulat() {
  let result = [];
  for (let i = 0; i <= 100000; i++) {
    if (i % 17 === 0 || i % 71 === 0) {
      result.push(i);
    }
  }
  return result;
}

let sum = bilBulat().reduce((a, b) => {
  return a + b;
}, 0);
let a = sum % 51681;

console.log(a);
