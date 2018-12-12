
function mergeSort(arr) { // descending
  if(arr.length <= 1) return arr
  const mid = Math.floor(arr.length/2)
  return mergeArray(
    mergeSort(arr.slice(0, mid)),
    mergeSort(arr.slice(mid, arr.length))
  )
}
function mergeArray(arr1, arr2) {
  let result = [], iter1 = 0, iter2 = 0
  while(iter1 < arr1.length && iter2 < arr2.length) {
    if(arr1[iter1] < arr2[iter2]) {
      result.push(arr1[iter1])
      iter1 += 1
    } else {
      result.push(arr2[iter2])
      iter2 += 1
    }
  }
  return [
    ...result,
    ...arr1.slice(iter1,arr1.length),
    ...arr2.slice(iter2,arr2.length)
  ]
}

console.log(mergeSort([5,3,7,1]))
