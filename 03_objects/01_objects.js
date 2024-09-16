// singleton
// object.create

// object literals
const mysym = Symbol("myKey1")
const jsUser = {
    user : "Aadil",
    "full Name" : "Aadil Ahmed",
    [mysym] : "myKey1",
    age : 12,
    email : "aadil@yahoo.com",
    idLoggedIn : true,
    lastLogginDays : ["Monday","Tuesday"]
}
console.log(jsUser.user)
console.log(jsUser["user"])
console.log(jsUser[mysym])
jsUser.email = "aadil@bhi.com"
console.log(jsUser["email"])
// Object.freeze(jsUser)
console.log(jsUser["email"])
jsUser.email = "aasid@njdh.com"

jsUser.greeting = function(){
    console.log("Hello js user");
}
jsUser.greeting = function(){
    console.log(`Hello js user, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());