// =========================================================
// SOAL NOMER 1
// Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka 
// tetapi diakhir kata Hasil = "EIGEN1"

let a = 'NEGIE1'
let output = ''
for (let i=a.length-2; i>=0; i--){
  output = output + a[i]
  if (i == 0) output = output + a[a.length-1] 
}
console.log(output)
// =========================================================