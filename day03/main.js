const fs = require('fs')

let input = fs.readFileSync('./input.txt').toString().split('\n')

// console.log(input, input[0].length)
input = input.map(line => line.split(''))

const inputLength = input.length

// console.log(input, input[0].length)

/*
                            y x
  Starting position is input[0][0]
  Current position is (0,0)

  (0+3, 0+1) -> (3,1)
  (3+3, 1+1) -> (6,1)
*/

const tree = "#"
const open = "."

let totalTreesEncountered = 0;
let totaltotal = []

let x = 0
let y = 0

console.log('=== Part 1')
let xShift = 3
let yShift = 1
while (y < (inputLength)) {
  if (x >= (input[y].length)) {
    x -= (input[y].length)
  }
  if (input[y][x] == tree) totalTreesEncountered++;

  x += xShift;
  y += yShift;

}
console.log({ totalTreesEncountered })



console.log('=== Part 2')
x = 0
y = 0
xShift = 1
yShift = 1
totalTreesEncountered = 0
while (y < (inputLength)) {
  if (x >= (input[y].length)) {
    x -= (input[y].length)
  }
  if (input[y][x] == tree) totalTreesEncountered++;

  x += xShift;
  y += yShift;

}
console.log({ totalTreesEncountered })
totaltotal.push(totalTreesEncountered)

x = 0
y = 0
xShift = 3
yShift = 1
totalTreesEncountered = 0
while (y < (inputLength)) {
  if (x >= (input[y].length)) {
    x -= (input[y].length)
  }
  if (input[y][x] == tree) totalTreesEncountered++;

  x += xShift;
  y += yShift;

}
console.log({ totalTreesEncountered })
totaltotal.push(totalTreesEncountered)

x = 0
y = 0
xShift = 5
yShift = 1
totalTreesEncountered = 0
while (y < (inputLength)) {
  if (x >= (input[y].length)) {
    x -= (input[y].length)
  }
  if (input[y][x] == tree) totalTreesEncountered++;

  x += xShift;
  y += yShift;

}
console.log({ totalTreesEncountered })
totaltotal.push(totalTreesEncountered)

x = 0
y = 0
xShift = 7
yShift = 1
totalTreesEncountered = 0
while (y < (inputLength)) {
  if (x >= (input[y].length)) {
    x -= (input[y].length)
  }
  if (input[y][x] == tree) totalTreesEncountered++;

  x += xShift;
  y += yShift;

}
console.log({ totalTreesEncountered })
totaltotal.push(totalTreesEncountered)

x = 0
y = 0
xShift = 1
yShift = 2
totalTreesEncountered = 0
while (y < (inputLength)) {
  if (x >= (input[y].length)) {
    x -= (input[y].length)
  }
  if (input[y][x] == tree) totalTreesEncountered++;

  x += xShift;
  y += yShift;

}
console.log({ totalTreesEncountered })
totaltotal.push(totalTreesEncountered)


let q = 1

totaltotal.forEach(total => { q *= total })

console.log("=== Total Possible Trees: " + q)