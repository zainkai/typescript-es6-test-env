/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
  let low = 0, high = S.length
  return S.reduce((acc, s) => {
      if (s === 'I') {
          acc.push(low)
          low++
      } else {
          acc.push(high)
          high--
      }
      return acc
  }, [])
};

console.log(diStringMatch(['I', 'D', 'I', 'D']))