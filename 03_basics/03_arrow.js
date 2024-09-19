const user = {
    // username : "Aadil",
    price : 999,
    welcomeMessage : function (){
        // console.log(`${this.username} , you are welcomed`);
        // console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "anas"
// user.welcomeMessage()
// user.welcomeMessage()
// console.log(this)

const one = function  (){
    let username =  "aadil"
    console.log (this.username);
    return
}
// one()


// const addTwoNumber = function (num1 ,num2){
//     return num1 + num2 
// }
// console.log(addTwoNumber(3,4))

// const arrow = (num1,num2) => {
//     return num1 +num2
// }
// console.log(arrow(3,7))


// const arrow = (num1,num2) =>  num1 +num2

// const arrow = (num1,num2) =>  (num1 +num2)

const arrow = (num1,num2) =>  ({username : "aadil"})
console.log(arrow(3,7))