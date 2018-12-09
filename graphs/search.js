/**
 *
 * @param {[Edge[start:any,end:any,val:Number]]} graph 
 * @param {[start,end]} query
 */
function dfs(graph, query) {
  const [qStart, qEnd] = query
  let map = {
    [qStart]: 0
  }

  let arr = [qStart]
  while(arr.length !== 0) {
    let curr = arr.pop() // <--- using stack

    graph.filter(t => t[0] === curr).forEach(edge => {
      const [u,v,w] = edge
      if(map[v] === undefined || map[v] === Infinity) {
        arr.push(v)
      }

      map[v] = Math.min(map[v] || Infinity, map[u] + w)
    })
  }

  return map[qEnd] === undefined ? -1 : map[qEnd]
}

console.log(dfs(
  [[2,1,1],[2,3,1],[1,4,1],[3,4,3]],
  [2,4]
))