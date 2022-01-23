// Fungsi dari bilangan segitiga terdefinisi sebagai, tn = ½n(n+1); maka 10 suku pertama dalam barisan bilangan segitiga adalah:

// 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

// Jika konversi setiap huruf pada suatu kata ke posisi indeks alfabet tersebut ditotalkan, kita akan mendapatkan nilai dari kata tersebut.

// Contoh: SKY, 19 + 11 + 25 = 55 = t10. Jika nilai dari kata tersebut adalah sebuah bilangan segitiga, maka kata tersebut dapat dikatakan sebagai kata segitiga

// Pada soal ini di dapatkan kata.txt, hitunglah berapa banyak kata segitiga pada file tersebut!

let t = 20;
let x = 24;

let txt = t + x + t;
console.log(txt);
//masih bingung
const a = 20,
  b = 24;
const N = 20;
const findNthTerm = (first, second, num) => {
  const diff = second - first;
  const fact = (num - 1) * diff;
  const term = first + fact;
  return term;
};
console.log(findNthTerm(a, b, N));
