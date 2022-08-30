class RomanNumeralHelper {
  constructor () {
    this.numerals = {
      X : {
        roman: 'X',
        decimal: 10,
        next: 'V',
        oneLess: 'I'
      },
      V : {
        roman: 'V',
        decimal: 5,
        next: 'I',
        oneLess: 'I'
      },
      I : {
        roman: 'I',
        decimal: 1
      }
    }
  }

  toRoman = (decimalNumber) => {
    let result = ''
    let tmp = decimalNumber
    let currentNumeral = 'X'

    while (tmp > 0) {
      const numeral = this.numerals[currentNumeral]
      let oneLessNumeral = {}
      if (numeral.oneLess) {
        oneLessNumeral = this.numerals[numeral.oneLess] || 0
      }

      console.log('eae',oneLessNumeral)
      tmp -=1
    } 
    return result
  }

  fromRoman = (romanNumber) => {
    const result = 1
    return result
  }
}

console.log('hey, your Decimal number in Roman is ',new RomanNumeralHelper().toRoman(1))
console.log('hey, your Decimal number in Roman is ',new RomanNumeralHelper().toRoman(6))
console.log('hey, your Decimal number in Roman is ',new RomanNumeralHelper().toRoman(9))
console.log('hey, your Roman number in Decimal is ',new RomanNumeralHelper().fromRoman('I'))