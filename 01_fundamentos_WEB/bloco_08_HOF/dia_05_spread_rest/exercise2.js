function sum (...nums) {
  return nums.reduce((acc, num) => acc + num)
}

console.log(sum(1, 4, 6, 9))