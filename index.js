function twoSum(nums, t) {
    const find = []
    for (let i = 0; i < nums.length; i++) {
      const n = nums[i]
      const complement = Math.abs(t - n)
      const fIdx = find.indexOf(complement)
      if (fIdx !== -1) {
        return [fIdx, i]
      }
      find[i] = complement
    }
  
    return [-1,-1]
  }
  
  console.log(twoSum([2,7,11,15], 9))