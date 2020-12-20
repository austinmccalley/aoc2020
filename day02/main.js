const fs = require('fs')

const input = fs.readFileSync('./input.txt').toString().split('\n')

console.log(input)
let total = 0;
input.forEach((line) => {
  let min = line.split('-')[0]
  let max = line.split('-')[1].split(' ')[0]

  let char = line.split('-')[1].split(' ')[1].split(':')[0]

  let pass = line.split('-')[1].split(' ')[2]

  let count = countChar(char, pass);

  if (count >= parseInt(min) && count <= parseInt(max)) {
    total++;
  }

  console.log({ min, max, char, pass, count, line })
})

console.log({ total })


let total2 = 0
input.forEach((line) => {
  let idx1 = line.split('-')[0]
  let idx2 = line.split('-')[1].split(' ')[0]

  let char = line.split('-')[1].split(' ')[1].split(':')[0]

  let pass = line.split('-')[1].split(' ')[2].split('')


  if (pass[idx1 - 1] === char && pass[idx2 - 1] != char) {
    ++total2;
  } else if (pass[idx2 - 1] === char && pass[idx1 - 1] != char) {
    ++total2;
  }

  console.log({ idx1, idx2, char, pass, line })
})

console.log({ total2 })



function countChar(c, s) {
  let i = 0;
  s.split('').forEach(char => {
    if (char === c) {
      ++i;
    }
  })

  return i
}