// // Function declerations--------
// function sum(a,b){
//     console.log(a+b);
// }
// //function call--------------
// sum(10,20);
// sum(14367,20);
// sum(16540,37250);
// sum(145650,634754390);
// sum(16545475688760,203784);

// function Name(){
//     console.log('Punit Jaiswal');
// }
// Name();
// Name();
// Name();


// function mul(a,b,c){
//     return a*b*c;
// }
// console.log(mul(10,20,30))


// function greet(name){
//     return `hello,${name}!`
// }
// console.log(greet('Punit'));


// // *** Arrow Function-----------------
// const greet = () => console.log("punit"); // function decleration
// greet()  // function call


// let add = (a,b) => a+b;
// console.log(add(33,55))


// // *** Function Scope------------------
// let scope = 100;
// let display = () => {
//     let scope = 20;
//     console.log("inside the display function", scope)//LOCAL Scope-------
// }
// display()
// console.log("outside the display function", scope)//GLOBAL Scope--------------

// let blockvar =15;
// if (true){
//     console.log(blockvar);
// }
//  console.log(blockvar);//BLOCK SCOPE


// //***CALLBACK FUNCTION-------------------------------------
// let greet = (Name , callback)=>{
//     console.log("hello"+Name);
//     callback();
// }
// let sayBye =()=> console.log("Bye");

// greet ("Punit",sayBye);


// setTimeout(() => {
//     console.log("Punit 2")
// }, 3000);

// setTimeout(() => {
//     console.log("Punit 1")
// }, 2000)
// console.log("Hello")
