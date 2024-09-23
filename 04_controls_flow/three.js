 const myArray = [1,3,3,4,4]

for (const val of myArray) {
    // console.log(val);
    
}
const greeting = "7686876890"
for (const greet of greeting) {
    // console.log(`each word is ${greet}`)
}

const map = new Map()
map.set ('IN',"India")
map.set ('Eng',"England")
map.set ('Ban',"Bangladesh")
map.set ('In',"India")

// console.log(map);
for (const [key,value] of map) {
    console.log(key, "-::::",  value);
}

