function isPalindrome(str) {
  let stk = []
  let i =0
  for(i;i < Math.floor(str.length /2); i++) {
    stk.push(str[i])
  }
  if(str.length %2 === 1) {
    stk.pop()
    i+=2
  }
  for(i;i < str.length; i++) {
    if(stk.pop() !==str[i]) return false
  }
  return true
}