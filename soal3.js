// Fungsi prima_berikut(n), menerima anggota bilangan bulat positif n, menghasilkan bilangan prima terkecil setelah n, dimana p > n.

// Deret fibonacci, fungsi f(n) terdefinisi sebagai f(0)=0, f(1)=1, dan f(n)=f(n-1)+f(n-2) for n>1

// Deret a(n) terdefinisi sebagai f(prima_berikut(n))

// Tentukan hasil ∑ a(n) untuk 1123≤n≤2123, berikan jawaban yang telah dioperasikan dengan mod 1234567929624
// let a = [];
// for (let i = 1123; i <= 2123; i++) {
//   a.push(i);
// }
// let b = a;
// console.log(b);

// masih bingung

function fibonacci(num) {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}
const nTerms = 2123;

if (nTerms <= 0) {
  console.log("Enter a positive integer.");
} else {
  for (let i = 0; i < nTerms; i++) {
    // console.log();
    if (fibonacci(i) % 1234567929624 == 0) {
      console.log(i);
    }
  }
}
