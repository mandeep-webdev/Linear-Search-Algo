// find a character in string

function search(str,target) {
  for(const ch of str) {
    if(ch === target) {
      return ch
    }
  }
  return "character doesnot exist"
}

console.log(search('mandeep', 'p'))