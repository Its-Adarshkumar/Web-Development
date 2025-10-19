// console.log("Hello world");
// console.log("Apna college");
// let a=9;
// let b=9;
// console.log("sum is =" ,a+b);

let pencilPrice=10;
let erasorPrice=5;
//let output="The total price is :" +(pencilPrice+erasorPrice)+"Rupees.";

let output=`The total price is : ${pencilPrice + erasorPrice} Rupess.`;//back tick
console.log(output);

//operator
let age=18;
console.log(age<=18);

console.log('before my if statement');
if(age>=18){
    console.log(' you can vote')
}
console.log("after my if statement");

let color='red';
//Trsffic Light
if(color==='red'){
    console.log('stop ! light color is red');
}
else if(color==='yellow'){
    console.log('slow down. light color is yellow');
}
else if(color==="green"){
    console.log("Go. Light color is green");
}

let marks=65;

if(marks>=80){
    console.log("A+");
}else if(marks>=60){
    console.log("A");
}
else if(marks>=33){
    console.log('B');
}else if(marks<33){
    console.log("Failed");
}

//Logical Operator
let markss=95;

if(markss>=33 && markss>=80 || !false){
    console.log('pass');
    console.log("A+")
}

//Qs

let str='apple';

if((str[0]==='a') && (str.length>3)){
    console.log("Good String");
}
else{
    console.log("Not Good");
}

//QS
let num=12;

if((num%3===0) && ((num+1==15) || (num-1==11))){
    console.log("Safe");
}else{
    console.log("Unsafe")
}

//truth and falsly value
let string="";

if(string){
    console.log("it has true value");
}else{
    console.log('it has false value');
}

//QS

let day=3;

switch(day){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log("Tuesday");
        break;
     case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    default:
        console.log("wrong day")
}

//alert('somehing is wrong! Danger ');
// console.log("this is a simple log");
// console.error("this is a error message");
// console.warn("this is a warning message");

// let firstName=prompt("Enter your name:")
// console.log(firstName);

// let firstName=prompt("enter first name:");
// let lastName=prompt("enter last name:");
// console.log("Welcome",firstName," ",lastName,"!");

//Qs
let userAge=prompt('enter user age:');
let userName=prompt('enter user name:');
let msg=`${userName} is ${userAge} years old.`;
alert(msg);