// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");

// //loops
// for(let i=1;i<=5;i++){
//     console.log(i);
// }

//print all odd no (1 to 15)
// for(let i=1;i<=15;i=i+2){
//     console.log(i);
// }

//print all even no (2 to 10)
// for(let i=2;i<=10;i=i+2){
//     console.log(i);
// }

//Multiplication Table for 5
// for(let i=5;i<=50;i+=5){
//     console.log(i);
// // }

// let n=prompt("write your number"); 
// n=parseInt(n);            // we use this fn b/c prompt mai string hota hai na ki integer
// for(let i=n;i<=n*10;i=i+n){
//     console.log(i);
// }

// for(let i=1;i<=3;i++){
//     console.log(`outer loop ${i}`);
//     for(let j=1;j<=3;j++){
//         console.log(j);
//     }
// }

// let i=0;

// while(i<=5){
//     console.log(i);
//     i++;
// }

//Favorite  Movie Game

// const favMovie="Avatar";
// let guess=prompt("guess the name of the movie");

// while((guess!=favMovie) ){
//     if(guess=="quit"){
//         console.log("you quit");
//         break;
//     }
//     guess=prompt("wrong guess .please try again")
// }

// if(guess==favMovie){
//     console.log("Congrats!!");
// }

// let i=0;
// while(i<=5){
//     if(i==3){
//         break;
//     }
//     console.log(i);
//     i++;
// }

//loops with Arrays

//let fruits=['mango','apple','banana','litchi','orange'];

// for(let i=0;i<fruits.length;i++){
//     console.log(i,fruits[i]);   //printing index with fruit names
// }

 ///backward loop

// for(let i=fruits.length-1;i>=0;i--){
//     console.log(i,fruits[i]);
// }

//Nested loops with Nested arrays

// let heroes=[['ironman','spiderman','thor'] ,
//             ['superman','wonder woman','flash']];

//             for(let i=0;i<heroes.length;i++){
//                 console.log(i,heroes[i]);
//                 for(let j=0;j<heroes[i].length;j++){
//                     console.log(`j=${j} ,${heroes[i][j]}`);
//                 }
//             }

// for of loop => for(element of collections)

// let fruits=['mango','apple','banana','litchi','orange'];

// for(fruit of fruits){
//     console.log(fruit);
// }

// for(char of "apnacollege"){
//     console.log(char);
// }

// let heroes=[['ironman','spiderman','thor'] ,
//              ['superman','wonder woman','flash']];

//              for(List of heroes){
//                 for(hero of List){
//                     console.log(hero);
//                 }
//              }


//count the digit in number
// let  num=287152;

// let count=0;

// let copy=num;

// while(copy>0){ 
//     copy=Math.floor(copy/10);
//     count++;
// }
// console.log(count);