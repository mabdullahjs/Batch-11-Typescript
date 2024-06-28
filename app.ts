// TS Compiler
// Type Annotations
// Type Inference
// Type Aliases
// Union Types
// Interfaces
// Type Aliases vs Interface
// Generics
// Enums
// Tuples
// Type Guards

//-----------Type Annotations-----------//

// let username:string = 'abdullah'
// username = 'haider'

// let age:number = 20;
// let isLoggedIn:boolean = true

// let fruit:string[] = ['mango' , 'orange' , 20];

// union type
// let username: string | number = 'abdullah'

// let mixedArr:(number | string | boolean)[] = ['abd' , 20 , true]

// function sum (num1:number , num2:number):number{
//     return num1 + num2
// }
// console.log(sum(20 , 20));

// function greetUser(username:string , age:number):void{
//     console.log(`hello ${username} with age ${age}`)
// }

// greetUser('abdullah' , 20)

//-----------Type Inference-----------//

// const username = 'abdullah'
// username = 20

// let age = 20;
// age = 'abdullah' // error age type is number

// function sum(num1:number , num2:number){
//     return num1 + num2
// }

//-----------Type Aliases-----------//

// type User = (string | number) []

// let username:User =[]

// type User = {
//   username: string;
//   email: string;
//   age: number;
//   lastname?: string
// };

// const user:User = {
//   username: "abdullah",
//   email: "mabdullh@gmail.com",
//   age: 20,
// };

// user.lastname = 'usman'
// user.fullname = 'abdullah'



//Interfaces


// interface User {
//   username: string;
//   email: string;
//   age: number;
//   lastname?: string
// };

// const user:User = {
//   username: "abdullah",
//   email: "mabdullh@gmail.com",
//   age: 20,
// };

// user.lastname = 'usman'
// user.fullname = 'abdullah'



// interface vs typealiases

// type User = {
//     username: string;
//     age: number
// }




// interface UserTwo {
//     username: string;
//     age: number
// }

// interface UserTwo {
//     fullName: string
// }