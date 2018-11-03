class Node {
  constructor(value,left,right) {
    this.value = value
    this.left = left || null
    this.right = right || null
  }
}

const root = new Node(5)
const left1 = new Node(3)
const right1 = new Node(7)

root.left = left1
root.right = right1

const left2 = new Node(2)
const right2 = new Node(4)
left1.left = left2
left1.right = right2

const left3 = new Node(6)
const right3 = new Node(8)
right1.left = left3
right1.right = right3

const levelOrderTraversal = (root) => {
  const q = []
  let node = root
  while (node !== null) {
    console.log(node.value)
    q.unshift(node.left)
    q.unshift(node.right)
    node = q.pop()
  }
}

const inOrderTrav = (node, arr = []) => {
  if(node === null) return
  inOrderTrav(node.left, arr)
  arr.push(node)
  inOrderTrav(node.right, arr)
}

