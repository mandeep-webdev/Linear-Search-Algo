// find the maximum value in an array

function max(arr){
  let max = arr[0]
  for(const num of arr) {
    if(num > max){
      max = num
    }
  }
  return max
}

console.log(max([22,90,88,-3,98]))