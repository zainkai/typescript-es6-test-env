const SORT_SETTING = {
  ASC:'ASC',
  DESC:'DESC'
}
const mergeMapArray = {
  [SORT_SETTING.ASC]: (result, arr1, iter1, arr2, iter2) => [...result,
    ...arr1.slice(iter1,arr1.length),
    ...arr2.slice(iter2,arr2.length)
  ],
  [SORT_SETTING.DESC]: (result, arr1, iter1, arr2, iter2) => [...result,
    ...arr2.slice(iter2,arr2.length),
    ...arr1.slice(iter1,arr1.length)
  ]
}
const mergeMapCompare = {
  [SORT_SETTING.ASC]: (a,b) => a < b,
  [SORT_SETTING.DESC]: (a,b) => b < a
}


function mergeSort(arr, setting=SORT_SETTING.DESC) { // descending
  if(arr.length <= 1) return arr
  const mid = Math.floor(arr.length/2)
  return mergeArray(
    mergeSort(arr.slice(0, mid)),
    mergeSort(arr.slice(mid, arr.length)),
    setting
  )
}

function mergeArray(arr1, arr2, setting) {
  let result = [], iter1 = 0, iter2 = 0
  while(iter1 < arr1.length && iter2 < arr2.length) {
    if(mergeMapCompare[setting](arr1[iter1],arr2[iter2])) {
      result.push(arr1[iter1])
      iter1 += 1
    } else {
      result.push(arr2[iter2])
      iter2 += 1
    }
  }
  return mergeMapArray[setting](result, arr1, iter1, arr2, iter2)
}

console.log(mergeSort([5,3,7,1]))
