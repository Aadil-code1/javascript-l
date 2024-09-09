// Interview perspective

// primitive datatype
// 7 types : String, Number, Boolean,  null,  undefined,
//           symbol,BigInt   [SNB    NUSB]

// const Id = Symbol("123")
// const userId =Symbol("123")
// console.log(Id===userId)

// const BigInt = 9828875377489n

// Reference (Non Primitive) 
// Array, Object, Function [AOF]

// console.log(typeof(Array)) function
// console.log(typeof(Object))  function
// console.log(typeof(Function))  function




const friends=  ["Aadil","Anas","kunal",5]
// console.log(friends)
let myObj = {
    name:"Aadil",
    age:18,
    school: "coding",
    Laptop:true
}
// console.log(myObj)
const myFunction = function(){
    // console.log("Hello World!")
}
//  console.log(typeof(bigInt))  undefined 
//  console.log(typeof(null))  object




// why javascript is dynamically type
// it automatically assigns thevalue of data type at run time

// stack ( primitive datatypes) ,heap (non primitive)


// let user1 = "Aadil"

// let user2 = user1
// console.log(user2)
// user2 = "anas"
// console.log(user1)
// console.log(user2)


// non primitive refrence datatype

 let user1 = {
       id :"Aadil",
       email:"yt@1.com"

 }
 let user2 = user1
 console.log(user1.email)

 user2.email = "yt@22.in" 
 console.log(user1.email)
 console.log(user2.email)