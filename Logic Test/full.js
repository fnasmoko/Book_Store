
// =========================================================
// SOAL NOMER 1
// Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka 
// tetapi diakhir kata Hasil = "EIGEN1"

// let a = 'NEGIE1'
// let output = ''
// for (let i=a.length-2; i>=0; i--){
//   output = output + a[i]
//   if (i == 0) output = output + a[a.length-1] 
// }
// console.log(output)
// =========================================================


// =========================================================
// SOAL NOMER 2
// Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, 
// jika ada kata dengan panjang yang sama silahkan ambil salah satu
// const sentence = "Saya sangat senang mengerjakan soal algoritma"
// output => mengerjakan: 11 character

// let sentence = "Saya sangat senang mengerjakan soal algoritma"
// let capitalCheck = /[A-z]/g.test('A')
// let output = ''
   
// for (let i=0; i<sentence.length; i++){
//   for (let j=i+1; j<sentence.length+1; j++){
//     let testString = sentence.substring(i,j)
//     let testString2 = sentence.substring(i,j)
//     for (let k=0; k<testString.length; k++){
//       let capitalCheck = /[A-z]/g.test(testString[k])
//       if (capitalCheck == true) testString2 = testString2.replace(testString[k],'')
//     }
//     if (testString2 == '' && output.length < testString.length) output = testString
//   }
// }
// console.log(output + ': ' + output.length + ' character')
// =========================================================


// =========================================================
// SOAL NOMER 3
// Terdapat dua buah array yaitu array INPUT dan array QUERY, 
// silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT

// let input = ['xc', 'dz', 'bbb', 'dz']  
// let query = ['bbb', 'ac', 'dz']  
// let output = []
// let total = 0

// for (let i=0; i<query.length; i++){
//   for (let j=0; j<input.length; j++){
//     if (input[j] == query[i]) ++total
//   }
//   output.push(total)
//   total = 0
// }
// console.log(output)
// =========================================================


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
// console.log(Matrix.length)
// let d1 = 0
// let d2 = 0
// for (let i=0; i<Matrix.length; i++){
//   d1 = d1 + Matrix[i][i]
//   d2 = d2 + Matrix[i][Matrix.length-i-1]
// }
// let hasil = d1 - d2
// console.log(hasil)
// =========================================================