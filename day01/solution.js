const fs = require('fs');


fs.readFile('input.txt', (err, data) => {
  if (err) throw new Error(err);

  let inp = data.toString().trim().split('\n').map(c => parseInt(c, 10));


  /* Part #1 */
  for (let i = 0; i < inp.length; i++)
    for (let j = 0; j < inp.length; j++) {
      if (inp[i] + inp[j] === 2020)
        console.log(inp[j], inp[i], inp[j] * inp[i])
    }


  /* Part #2 */
  for (let i = 0; i < inp.length; i++)
    for (let h = 0; h < inp.length; h++)
      for (let j = 0; j < inp.length; j++) {
        if (inp[h] + inp[i] + inp[j] === 2020)
          console.log(inp[j], inp[i], inp[h], inp[j] * inp[i] * inp[h])
      }

})