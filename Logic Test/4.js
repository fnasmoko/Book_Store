// =========================================================
// SOAL NOMER 4
// Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN 
// Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]
// diagonal pertama = 1 + 5 + 9 = 15 
// diagonal kedua = 0 + 5 + 7 = 12 
// maka hasilnya adalah 15 - 12 = 3

// let Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]
// let Matrix = [[1, 2], [3, 4]]
// let Matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
console.log(Matrix.length)
let d1 = 0
let d2 = 0
for (let i=0; i<Matrix.length; i++){
  d1 = d1 + Matrix[i][i]
  d2 = d2 + Matrix[i][Matrix.length-i-1]
}
let hasil = d1 - d2
console.log(hasil)
// =========================================================