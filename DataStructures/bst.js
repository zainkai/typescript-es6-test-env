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

// Flat arr
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

// 2d array
function levelOrder(root) {
  let map = {}
  levelOrderHelper(root, map, 0)
  return Object.keys(map).map(key => map[key])
}
function levelOrderHelper(root, map, level) {
  if (root === null) return map

  if(map[level] === undefined) {
    map[level] = [root.val]
  } else {
    map[level].push(root.val)
  }
  levelOrderHelper(root.left, map, level +1)
  levelOrderHelper(root.right, map, level +1)
  return map
}

const inOrderTrav = (node, arr = []) => {
  if(node === null) return
  inOrderTrav(node.left, arr)
  arr.push(node)
  inOrderTrav(node.right, arr)
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root, stk = []) {
  if (root === null) return []
  
  stk.push(root.val)
  preorderTraversal(root.left, stk)
  preorderTraversal(root.right, stk)

  return stk
};


var maxDepth = function(root, level =1, obj={}) {
  if(root === null) return 0

  obj.depth = Math.max(
    level,
    maxDepth(root.left, level+1, obj),
    maxDepth(root.right, level+1, obj)
  )
  return obj.depth
}
