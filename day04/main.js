const fs = require('fs')

let input = fs.readFileSync('./input.txt').toString().split('\n')


let passports = []
let allPassports = []


console.log('=== Part 1')

let passport = {}

input.forEach((line) => {
  if (line !== '') {
    let parts = line.split(' ')
    parts.forEach(part => {
      let key = part.split(':')[0]
      let value = part.split(':')[1]
      passport[key] = value
    })
  } else {
    passports.push(passport)
    passport = {}
  }
})

console.log("=== Total Length: " + passports.length)
allPassports = passports

passports = passports.map(passport => {
  if (passport.hasOwnProperty('byr') && passport.hasOwnProperty('iyr') && passport.hasOwnProperty('eyr') && passport.hasOwnProperty('hgt') && passport.hasOwnProperty('hcl') && passport.hasOwnProperty('ecl') && passport.hasOwnProperty('pid')) {
    return passport
  }
})


let validPassports = []
passports.forEach(passport => {
  if (typeof passport === 'object') {
    validPassports.push(passport)
  }
})



console.log({ length: validPassports.length })

console.log('=== Part 2')

passports = allPassports

validPassports = []

passports.forEach(passport => {
  let checks = [false, false, false, false, false, false, false]

  checks[0] = passport.hasOwnProperty('byr') && passport?.byr.length === 4 && parseInt(passport.byr) >= 1920 && parseInt(passport.byr) <= 2002
  checks[1] = passport.hasOwnProperty('iyr') && passport?.iyr.length === 4 && parseInt(passport.iyr) >= 2010 && parseInt(passport.byr) <= 2020
  checks[2] = passport.hasOwnProperty('eyr') && passport?.eyr.length === 4 && parseInt(passport.eyr) >= 2020 && parseInt(passport.eyr) <= 2030

  if (passport.hasOwnProperty('hgt') && /[0-9]{2,3}[a-zA-Z]{2}/gm.test(passport.hgt)) {
    const h = passport.hgt.substr(0, passport.hgt.length - 2)
    const units = passport.hgt.substr(passport.hgt.length - 2, passport.hgt.length)

    if (units === "cm") {
      checks[3] = parseInt(h) >= 150 && parseInt(h) <= 193
    } else if (units === "in") {
      checks[3] = parseInt(h) >= 59 && parseInt(h) <= 76
    }
  }


  if (passport.hasOwnProperty('hcl')) {
    let color = passport.hcl.split('')

    if (color[0] !== '#') {
      checks[4] = false
    } else {
      color.shift()
      let regexp = /^[0-9a-fA-F]+$/
      if (color.length === 6) {
        checks[4] = regexp.test(color.join(''))
      }
    }
  }

  checks[5] = passport.hasOwnProperty('ecl') && "amb blu brn gry grn hzl oth".split(" ").includes(passport.ecl)


  checks[6] = passport.hasOwnProperty('pid') && passport.pid.length === 9 && /[0-9]/gm.test(parseInt(passport.pid))



  const valid = checks.every((value) => value === true)


  if (valid) {
    // console.log("== Valid passport")
    // console.log({ passport, checks })
    validPassports.push(passport)
    // console.log('\n')
  } else {
    // console.log("== Invalid passport")
    // console.log({ passport, checks: checks })
  }
})

console.log({ length: validPassports.length - 1 })


function validHexDecimal(s) {
  s.split('').forEach(c => {
    if (!((c >= '0' && c <= '9') || (c >= 'a' && c <= 'f'))) {
      return false
    }
  })
  console.log({ s })
  return true
}

function allNumbers(s) {
  s.split('').forEach(c => {
    if (!(c >= '0' && c <= '9'))
      return false;
  })
  return true;
}
