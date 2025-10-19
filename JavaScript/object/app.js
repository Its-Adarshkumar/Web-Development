//object literals- complex properties

// const student={
//     name:"Adarsh",
//     age:18,
//     marks:95
// };

// const item ={
//     price:100.99,
//     discount:50,
//     colors:["red","pink"]
// };

// const obj ={
//     1:'a',
//     2:'b',
//     null:'d',
//     true:"c",
//     undefined:'e'
// };

// const post={
//     username:"@adarsh",
//     content:"This is my #first post",
//     likes:1000,
//     repost:1344,
//     comments:['nice','amazing'],
//     tags:['@apnacollege','@delta']
// };

//Get values from object
// post.content;
//post['content'];

//Add / Update values in object

// const student={
//     name:"Adarsh",
//     age:18,
//     marks:95,
//     city:"Delhi"
// };

// student.city="Mumbai";
// student.gender="Male";
// delete student.city;

//object of objects

// const classInfo ={
//     aman:{
//         grade:"A+",
//         city:"Delhi"
//     },
//     Adarsh:{
//         grade:"O+",
//         city:"bihar"
//     },
//     karan:{
//         grade:"B+",
//         city:"kahiBhi"
//     }
// }

//array of objects
// const ClassInfo=[
//     {
//         name:"Adarsh",
//         grade:"A+",
//         city:"Bihar"
//     },
//     {
//         name:"karan",
//         grade:"B+",
//         city:"Delhi"
//     },
//     {
//         name:"aryan",
//         grade:"O+",
//         city:"Mumbai"
//     }
// ]

//Random integer from 1-10
// let num=Math.random();
// num=num*10;
// num=Math.floor(num);
// num=num+1;


//Random integer from 21-25
//let random=Math.floor(Math.random()*5)+21;


//random number game
const max=prompt("Enter your max number");

const random=Math.floor(Math.random()*max)+1;
let guess=prompt("Guess the number");

while(true){
    if(guess=="quit"){
        console.log("You quit the game");
        break;
    }

    if(guess==random){
        console.log("Congrats! You guessed the number");
        break;
    }
    else if(guess<random){
        guess=prompt("Too low! Try again");
    }
    else if(guess>random){
        guess=prompt("Too high! Try again");
    }
    else{
        prompt("your guess was wrong ! try again");
    }
}