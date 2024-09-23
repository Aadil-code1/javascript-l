

// for (let index = 0; index <=5; index++) {
//     const element = index;
//     console.log(element)
// }

// for (let i = 0; i <=5; i++) {
//     const element = i;
//         if (i == 4) {
//             console.log("found a number")
//         }
//     console.log(element)
    
// }
// imp note  for loop thread runs from top to bottom and completes the end task first than move to second last task.

for (let i = 0; i <= 5; i++) {
    // console.log(`outer loop : ${i}`)
    for (let j = 0; j < 6; j++) {
        // console.log (`innner loop: ${j} ,outer loop ${i}`)
        // console.log (i + '*' +  j + '='+ i*j);
        
    }
    
}
for(i = 1 ; i<=10; i++){

    if (i == 5){
        console.log(`remove number:5`)
        continue
    }
    console.log(`favourite number is : ${i}`)

    
}