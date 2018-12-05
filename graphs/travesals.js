

/**
 * 
 * @param {[Edge[start:any,end:any,val:Number]]} graph 
 * @param {Number} start 
 */
function dfs(graph, start) {

  let visited = [start]
  let arr = [start]
  while(arr.length !== 0) {
    start = arr.pop() // <--- using stack
    graph.filter(t => t[0] === start).forEach(edge => {
      const [u,v,w] = edge
      if(!visited.includes(v)) {
        visited.push(v)
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

  let visited = [start]
  let arr = [start]
  while(arr.length !== 0) {
    start = arr.shift() // <--- using queue
    graph.filter(t => t[0] === start).forEach(edge => {
      const [u,v,w] = edge
      if(!visited.includes(v)) {
        visited.push(v)
        arr.push(v)
      }
      console.log(`${u} -> ${v}`)
    })
  }
}


function minSpanningTree(graph, start, searchType='dfs') {
  let map = {}
  map[start] = 0

  let visited = [start]
  let arr = [start]
  while(arr.length !== 0) {
    start = searchType === 'dfs' ? arr.pop(): arr.shift()

    graph.filter(t => t[0] === start).forEach(edge => {
      const [u,v,w] = edge
      if(!visited.includes(v)) {
        visited.push(v)
        arr.push(v)
      }
      if(map[v] === undefined) map[v] = Infinity
      map[v] = Math.min(map[v], map[u] + w)
    })
  }
  return map
}

console.log(minSpanningTree(
  [[0,1,1], [1,2,2], [2,3,5], [3,0,4], [0,2,3]],
  0,
  'bfs'
))

console.log(dfs(
  [[2,1,1],[2,3,1],[1,4,1],[3,4,1]],
  2
))
console.log(bfs(
  [[2,1,1],[2,3,1],[1,4,1],[3,4,1]],
  2
))