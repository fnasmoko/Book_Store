// =========================================================
// SOAL NOMER 2
// Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, 
// jika ada kata dengan panjang yang sama silahkan ambil salah satu
// const sentence = "Saya sangat senang mengerjakan soal algoritma"
// output => mengerjakan: 11 character

let sentence = "Saya sangat senang mengerjakan soal algoritma"
let capitalCheck = /[A-z]/g.test('A')
let output = ''
   
for (let i=0; i<sentence.length; i++){
  for (let j=i+1; j<sentence.length+1; j++){
    let testString = sentence.substring(i,j)
    let testString2 = sentence.substring(i,j)
    for (let k=0; k<testString.length; k++){
      let capitalCheck = /[A-z]/g.test(testString[k])
      if (capitalCheck == true) testString2 = testString2.replace(testString[k],'')
    }
    if (testString2 == '' && output.length < testString.length) output = testString
  }
}
console.log(output + ': ' + output.length + ' character')
// =========================================================