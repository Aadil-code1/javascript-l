

// const userEmail = ""
const userEmail = []
if (userEmail){
    console.log("user have email");
    
}else {
    console.log("user dont have an email")
}
// falsy value
// 0, -0, bigInt 0n,null, undefined,NaN,"",false  if these keywords are assigned than false block will execute
// truthy value
// "0", " ",'false' , [], {},function(){},

if (userEmail.length == 0) {
    console.log("array is empty");
    
}

const userobj = {}

if(Object.keys(userobj).length == 0){
    console.log("object is empty");   
}
// ++++++++++++++++++++++++++++++++++++++++++++=+++++++++++++++++++++++++++++++++

// nullish Coalescing operator null ,undefined

let value1;
value1 = null ??  10
// value1 = 5 ??  10
console.log(value1);
// terniary operator

// condition ? true : false

const priceOfTshirt = 200
priceOfTshirt >=300 ? console.log("good price"):console.log("higher price");
