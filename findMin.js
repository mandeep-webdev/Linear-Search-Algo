// find the minimum value in an array

function min(arr){
  let min = arr[0]
  for(const num of arr) {
    if(num < min){
      min = num
    }
  }
  return min
}

console.log(min([22,90,88,-3,98]))