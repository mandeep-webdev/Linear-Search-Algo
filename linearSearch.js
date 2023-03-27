// return an index of the target value
function search(arr,target){
  for(let i = 0; i<arr.length ; i++) {
    if(arr[i] === target){
      return i
    }
  }
  return -1
}

console.log(search([98,7,0,34,33],33))

// return the target value

function search2(arr,target){
  for(const number of arr) {
    if(number === target){
      return number
    }
  }
  return "element doesnot exist"
}

console.log(search2([98,7,0,34,33],99))