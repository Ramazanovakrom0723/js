// // 1-misol
// const Prime_argumant =(argument)=>{
//     conut = 0
//     for( let i = 1; i <= argument; i++){
//         if(argument % i == 0){
//             conut++
//         }
//     }
//     if(conut == 2){
//         return "Bu son tub son"
//     }else{
//         return "Bu son tub son emas"
//     }
// }
// Prime_argumant(21)






// 2-misol

// const Perfect_number  = function(number){
//     if(number){
//         let total = 0
//         for(let i = 1; i < number; i++){
//             if(number % i == 0){
//                 total += i
//             }
//         }
//     if(number === total){
//         return `Murakkab son`
//     }else{
//         return `Murakkab son emas`
//     }

//     }else{
//         return "Son kiritilmagan sonni kiriting"
//     }
// }

// Perfect_number(43) 






// 3-misol

// const letter_number = function(letters){
//     let unli = 0
//     let undosh = 0
//     for (let i = 0; i < letters.length; i++) {
//         if (letters[i]==="a" ||letters[i]==="i"|| letters[i]==="e"||letters[i]==="o"||letters[i]==="o'"||letters[i]==="u") {
// unli +=1            
//         }else{
//             undosh +=1
//         }
        
//     }
//     console.log(undosh,unli);
// }
// letter_number("Navruz muborak")






// 4- misol

// const number = function(a,b){
//     let x = Math.abs(5-a)
//     let y = Math.abs(5-b)
//     console.log(Math.min(x,y));
// }
// number(-5,-9)






// 5- misol

// const Total_number = function(a,b){
//     let x = (a+b)*2
//     let y = (a*b)
//     console.log(x,y);
// }
// Total_number(6,2)






// 6- misol

// function number(a,n) {
//     console.log(Math.pow(a,n));
// }
// number(5,6)






// 7-misol

// function number(a) {
//   if (a>0) {
//     console.log(1);
//   } else if(a<0) {
//     console.log(-1);
//   }else if (a==0){
// console.log(0);
//   }
// }
// number(28)
