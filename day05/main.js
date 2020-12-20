const fs = require('fs');

const inputArray = fs.readFileSync('./input.txt').toString().split('\n');

const parseSeat = ({ input }) => {
  const seperatedInput = input.split('');

  const rowSplit = seperatedInput.slice(0, 7);
  const colSplit = seperatedInput.slice(seperatedInput.length - 3, seperatedInput.length);

  let row = Array(127).fill(null).map((_, i) => i);
  let col = Array(8).fill(null).map((_, i) => i);

  rowSplit.forEach((c) => {
    if (c === 'F') {
      row = row.slice(0, row.length / 2);
    } else if (c === 'B') {
      row = row.slice(row.length / 2, row.length);
    }
  });

  row = row[0] + 1;

  colSplit.forEach((c) => {
    if (c === 'L') {
      col = col.slice(0, col.length / 2);
    } else if (c === 'R') {
      col = col.slice(col.length / 2, col.length);
    }
  });

  col = col[0];

  console.log({ row, col, res: row * 8 + col });
  return (row * 8) + col;
};

const findMissingSeat = ({ res }) => {
  const row = Array(127).fill(null).map((_, i) => i);
  const col = Array(8).fill(null).map((_, i) => i);

  row.forEach((r) => {
    if (r !== 0 && r < 113) {
      col.forEach((c) => {
        console.log({ r, c, indx: res.indexOf(r * 8 + c) });
        if (res.indexOf(r * 8 + c) === -1) {
          return r * 8 + c;
        }
      });
    }
  });
};

let max = -1;
const res = [];
inputArray.forEach((line, i) => {
  res.push(parseSeat({ input: line }));
  if (res[i] > max) {
    max = res[i];
  }
});

console.log({ max });

findMissingSeat({ res });
