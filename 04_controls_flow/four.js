const myObject = {
    js :"javascript",
    cpp : "c plus plus",
    rb : "ruby"
}
for (const key in myObject) {
    // console.log(key);
    // console.log(`${key}: is shortcut for ${myObject[key]}`);
    
    }


const myArray = ["python","cpp","java","javascript"]

for (const key in myArray) {
//   console.log(myArray[key]);
  
    
}

const program = ["code","cpu","gpu","core"]

program.forEach( function (val){
    // console.log(val)
})

// a different way of writing things

program.forEach( (item) => {
    // console.log(item);
})

// callback function

function  printMe (item){
    console.log(item)
}
// program.forEach(printMe)

program.forEach((item,index,arr)  => {
    // console.log(item,index,arr)
})


const myCoding = [
    {
        language :"javascript",
        file :"js"
    },
    {
        language :"java",
        file :"java"
    },
    {
        language :"python",
        file :"py"
    }
] 
myCoding.forEach( (item) => {
    // console.log(item);
    console.log(item.file);
    
})