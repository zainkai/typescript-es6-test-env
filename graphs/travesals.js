/**
 *
 * @param {[Edge[start:any,end:any,val:Number]]} graph 
 * @param {Number} start 
 */
function dfs(graph, start) {
  let arr = [start]
  while(arr.length !== 0) {
    start = arr.pop() // <--- using stack
    graph.filter(t => t[0] === start).forEach(edge => {
      const [u,v,w] = edge
      if(!arr.includes(v)) {
        arr.push(v)
      }
      console.log(`${u} -> ${v}`)
    })
  }
}


/**
 * 
 * @param {[Edge[start:any,end:any,val:Number]]} graph 
 * @param {Number} start 
 */
function bfs(graph, start) {
  let arr = [start]
  while(arr.length !== 0) {
    start = arr.shift() // <--- using queue
    graph.filter(t => t[0] === start).forEach(edge => {
      const [u,v,w] = edge
      if(!arr.includes(v)) {
        arr.push(v)
      }
      console.log(`${u} -> ${v}`)
    })
  }
}

console.log(dfs(
  [[2,1,1],[2,3,1],[1,4,1],[3,4,1]],
  2
))
console.log(bfs(
  [[2,1,1],[2,3,1],[1,4,1],[3,4,1]],
  2
))
