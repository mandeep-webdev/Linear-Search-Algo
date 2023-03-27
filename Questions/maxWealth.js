// Richest Customer Wealth
// https://leetcode.com/problems/richest-customer-wealth/

function maximumWealth(accounts) {
  let maxWealth = 0
    for(let person = 0; person < accounts.length; person ++ ){
      let totalWealth = 0
      for(let bankAccounts = 0; bankAccounts < accounts[person].length; bankAccounts ++){
        totalWealth = totalWealth + accounts[person][bankAccounts]
      }
      if(totalWealth > maxWealth) {
    maxWealth = totalWealth
  }
    }
  
  return maxWealth
}

// 2nd solution
function maximumWealth2(accounts) {
  let maxWealth = 0
    for(const person of accounts){
      let totalWealth = 0
      for(const bankaccounts of person){
        totalWealth = totalWealth + bankaccounts
      }
      if(totalWealth > maxWealth) {
    maxWealth = totalWealth
  }
    }
  
  return maxWealth
}


console.log(maximumWealth([[1,2,3],[3,2,1]]))
console.log(maximumWealth2([[1,5],[7,3],[3,5]]))