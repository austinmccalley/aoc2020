/* eslint-disable max-len */
const fs = require('fs');

let inputArray = fs.readFileSync('./input.txt').toString().split('\n');

if (process.env.DEBUG) inputArray = fs.readFileSync('./example.txt').toString().split('\n');

const removeDuplicates = ({ arr }) => arr.map((elm) => [...new Set(elm)]);

const parseInputOne = ({ input }) => {
  const arr = [];

  let temp = [];
  input.forEach((l) => {
    if (l === '') {
      arr.push(temp);
      temp = [];
    } else {
      temp.push(l.split(''));
    }
  });

  return arr;
};

const parseInputTwo = ({ input }) => {
  const arr = [];

  let temp = [];
  input.forEach((l) => {
    if (l === '') {
      arr.push(temp);
      temp = [];
    } else {
      temp.push(l.split(''));
    }
  });

  return arr;
};

const partOne = ({ arr }) => removeDuplicates({ arr })
  .map((elm) => elm.length)
  .reduce((a, b) => a + b, 0);

const partTwo = ({ arr }) => {
  let groupLength = -1;
  let uniqueAnswers = 0;
  let checked = [];
  let printed = false;
  arr.forEach((group, groupIndx) => {
    groupLength = group.length;
    if (groupLength === 1) {
      uniqueAnswers += group[0].length;
      if (!printed) { console.log({ group }); printed = !printed; }
    } else {
      const asciiGroup = group.map((person) => person.map((c) => c.charCodeAt(0)));
      const grp = [];

      asciiGroup.forEach((person) => {
        if (person.length === 1) grp.push(BigInt(person[0]));
        else {
          grp.push(person.reduce((a, b) => BigInt(a) * BigInt(b), BigInt(1)));
        }
      });

      // asciiGroup.map((person) => person.map((c) => c.reduce((a, b) => a * b, 1)));
      group.forEach((person) => {
        person.forEach((answer) => {
          const ascii = answer.charCodeAt(0);
          if (!checked.includes(answer)) {
            checked.push(answer);

            const inEvery = grp.every((asciiSum) => asciiSum % BigInt(ascii) === BigInt(0));

            if (inEvery) {
              // console.log({
              // group, ascii, answer, grp, asciiGroup, inEvery,
              // });
              if (!printed) { console.log({ group }); printed = !printed; }
              uniqueAnswers += 1;
            }
          }
        });
      });
    }
    checked = [];
    printed = false;
  });

  return uniqueAnswers;
};

// console.log({ inputArray });

// console.log({ partOne: partOne({ arr: parseInputOne({ input: inputArray }) }) });
console.log({ partTwo: partTwo({ arr: parseInputTwo({ input: inputArray }) }), expected: 34 });
