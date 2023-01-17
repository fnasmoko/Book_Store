// =========================================================
// SOAL NOMER 3
// Terdapat dua buah array yaitu array INPUT dan array QUERY, 
// silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT

let input = ['xc', 'dz', 'bbb', 'dz']  
let query = ['bbb', 'ac', 'dz']  
let output = []
let total = 0

for (let i=0; i<query.length; i++){
  for (let j=0; j<input.length; j++){
    if (input[j] == query[i]) ++total
  }
  output.push(total)
  total = 0
}
console.log(output)
// =========================================================