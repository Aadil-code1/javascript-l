const arr1 =[1,2,3,4,5]
const arr2 = [6,7,8,9,0]
// arr1.push(arr2)
// console.log(arr1)

//  const realarr = arr1.concat(arr2)
// console.log(realarr)
const addarr = [...arr1,...arr2]
console.log(addarr)
const another_arr = [1,2,3,[4,6],4,[4,5,6,[5,64,6]]]

const real_arr =    another_arr.flat (Infinity)
console.log(real_arr)
console.log(Array.isArray("Aadil"))
console.log(Array.from("Aadil"))
console.log(Array.from({user : "Aadil"}));   //interesting case for interview
let one = 100
let two = 200
let three = 300

console.log(Array.of(one,two,three))
