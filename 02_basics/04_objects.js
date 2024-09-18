const tinderUser = {}
// const tinderUser2 = new Object()//singleton 
console.log(tinderUser)
// console.log(tinderUser2)

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false


const appUser  = {
    email : "sjfkj@jd.com",
    fullName : {
        firstName : "Aadil",
        lastName : "Ahmed",
        address :{
            state : "jdghd",
            district : "jfjjjg",
        }
    }    


}
// console.log(appUser.fullName.address);
const obj1 = {1:"a",2 :"b"}
const obj2 =  {3:"c",4 :"d"}
const obj3 = {5:"e",6 :"f"}

// const obj4 = Object.assign({},obj1,obj2,obj3)
// // console.log (obj4)

// const obj5 = {...obj1,...obj2}
// // console.log(obj5);
// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));
// console.log(Object.entries(obj1));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
//object de structure and json api
const course ={
   coursename :"js in hindi",
   price :"999",
   courseInstructor : "hitesh"
}
console.log(course.courseInstructor)

const {courseInstructor:instructor} =course

// console.log(courseInstructor)
console.log(instructor)

// {
//     "coursename" :"js in hindi",
//     "price" :"999",
//     "courseInstructor" : "hitesh"
// }

// [
//     {},
//     {},
// ]