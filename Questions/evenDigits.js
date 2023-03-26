//  Find Numbers with Even Number of Digits
// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/

// Solution1
function evenDigits(nums) {
  let count = 0
  for(const number of nums){
    if(isEven(number)){
      count ++
    }
    
  }
  return count
}

function isEven(no) {
  const totalDigits = no.toString().length
  if(totalDigits % 2 === 0){
    return true
  } else {
    return false
  }
}
const ans = evenDigits([555,901,482,1771])
console.log(ans)

// Solution2

function evenDigits2(nums) {
  let count = 0
  
  for(const number of nums){
    
    const totalDigits = countDigits(number)
    
    if(totalDigits % 2 ===0){
      count ++
    }
  }
  return count
}

function countDigits(num) {
  // if there is a negative number
  if(num < 0) {
    num = num * -1
  }
  // if there is only one number
  if(num === 0) {
    return 1
  }
  
  let count = 0
  while(num > 0) {
    count ++
    num = Math.floor(num/10)
  }
  return count
}
const output= evenDigits2([12,345,2,6,7896])
console.log(output)

// 3rd Approach

function countDigits2(num){
  return Math.floor(Math.log10(num)) + 1
}

console.log(countDigits2(898989))