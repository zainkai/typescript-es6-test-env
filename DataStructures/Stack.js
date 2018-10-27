// This is already integrated to javascript

const stackTop = arr => { // TODO: make prototype for top function
  return arr[arr.length -1]
}

let stack = [0,1,4,6]
console.log(stack)

stack.pop()
console.log(stack)

stack.push(99)
console.log(stack)

console.log(stackTop(stack))
