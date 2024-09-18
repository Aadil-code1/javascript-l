function sayMyName (){
    console.log("A")
    console.log("a")
    console.log("d")
    console.log("i")
    console.log("l")
}
// sayMyName ()

function addTwoNumbers(num1,num2) {
    console.log(num1 + num2)
}
// addTwoNumbers(3,4)

function addTwoNumbers(num1,num2) {
//   let result =  num1 + num2
//   return result
    return num1 +num2
}
let result = addTwoNumbers(4,5)
console.log("Result:" ,  result);

// function user (username) {
    // if(username == undefined){
    //    console.log("please enter your name");
        
        // return
    // }
    // return `${username} userLoggedIn`
// }
// console.log (user());

function priceCart (val1 ,val2,...num1){
    return num1
}

console.log(priceCart(200,34,543,677,567,4567));


const user  = {
    username :"aadil",
    price :199

}

function handleObject (anyobject){
    console.log (`username is ${anyobject.username}
        and the price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username: "aadil",
    price: 455
})
myNewArray = [45,45,6,3,5]
function secondValue (getArray){
    return getArray[2]
}
// console.log(secondValue(myNewArray));
console.log(secondValue([75,65,45,36]));
