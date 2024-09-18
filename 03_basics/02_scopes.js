// let a = 300
// if(true){
//     let a = 10
//     const b = 20
    
//     console.log("INNER :", a)
// }
// console.log(a)
// console.log(b)

function one(){
    const username = "aadil"
    function two (){
        const website = "youtube"
        console.log(username)
    }
    
// console.log(website)
    two()
}
 
one()