// odd or even
// sum(56) - ODD
var a=5 + 6 
var b=11 % 2 
// sum(745) - EVEN
var c=7 + 4 + 5
var d=16 % 2 

// Number To String
.toString()
+ ''
// String To Number
// parseInt - for integer
// parseFloat - for decimals
// Number - returns NaN if not a number
// reduce this to 3 line of code
const sum = (number) => {
const items = [...(number + '')]
const result = items.reduce((total, item) => {
  return total + Number(item)
  }, 0)
  console.log(result)
  return result % 2 === 0 ? 'EVEN' : 'ODD'
}
console.log(sum(56))
console.log(sum(745))

