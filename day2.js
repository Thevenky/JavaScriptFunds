//Loops
//loops are needed to repeat the message multiple times without writing the same code again and again

//for loop
//syntax: for(initialization; condition; increment/decrement){
//code to be executed
//}

// for (statement1; statement2; statement3){

// }

for (let i = 0; i < 5; i++){
    console.log("Hello World");
}

var cars = ['BMW', 'Audi', 'Mercedes'];
//for of loop
//syntax: for(variable of iterable){
//code to be executed
//}

// for(let car of cars){
//     console.log(car);
//     if (car == "Audi"){
//         break; //break statement is used to exit the loop when a certain condition is met
//     }
// }

// //The beloe is ES6 syntax

// cars.forEach(car =>{
//     console.log(car);
// })


//print numbers 1 to 5 

// for (i=1; i<=5; i++){
//     console.log(i)
// }

// let n = 100; 
// let sum = 0 ;

// for (let i=1 ; i<=n;i++)
// {
//     sum = sum+i
// }
// console.log(sum)


//find the sum of all even numbers from 1 to n 

let n = 6; 
let sum = 0;

for (let i=0; i<=n;i++) {
    if (i%2==0){
        sum = sum+i
    }
}
console.log(sum)