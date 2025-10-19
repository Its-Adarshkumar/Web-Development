function hello(){
    console.log("hello");
}

function print1to5(){
    for(let i=1;i<=5;i++){
        console.log(i);
    }
}

function isAdult(){
    let age=18;
    if(age>=18){
        console.log("Adult");
    }else{
        console.log("Not Adult");
    }
}

// isAdult();

// print1to5();

// practice qs
function printPoem(){
    console.log("Twinkle, twinkle, little star,");
    console.log("How I wonder what you are!");
}

// printPoem();

//practice qs   
function rollDice(){ 
    let random=Math.floor(Math.random()*6)+1;
    console.log(random);
}

// rollDice();
// rollDice();
// rollDice();

//function with arguments

function printName(name){
    console.log(name);
}
// printName("Adarsh");

function printInfo(name,age){
    console.log(`${name}'s age is ${age}`);
}

//printInfo("Adarsh",20);

//calculate the average of 3 numbers

function average(a,b,c){
    let avg=(a+b+c)/3;
    console.log(avg);
}

// average(1,2,3);

//multiplication table

function printTable(n){
    for(let i=n;i<=n*10;i+=n){
        console.log(i);
    }
}

//printTable(5);

function sum(a,b){
    console.log("hello");
    return a+b;
    //console.log("world");  not possible b/c return statement is the last statement of the function
}

// let s=sum(1,2);
// console.log(s);
// console.log(sum(sum(1,2),3));

//function that add 1 to n

function add1toN(n){
    let sm=0;

    for(let i=1;i<=n;i++){
        sm+=i;
    }
    return sm;
}

let str=['hi','hello','bye'];

function concat(str){
    let result="";
    for(let i=0;i<str.length;i++){
        result+=str[i];
    }

    return result;
}

//function scope
//Block scope
//Lexical scope

let greet="hello"; //Global scope

function changeGreet(){
    greet="hi";   //function scope
    console.log(greet); 

    function innerGreet(){
        console.log(greet); //lexical scope
    }

    innerGreet();
}

// console.log(greet);
// changeGreet();

// function Expression or Nameless function

let add =function(a,b){
    return a+b;
}

// let hello=function(){
//     console.log("hello");
// }


//Higher order function
//return function
// take one or more function as argument

function multipleGreet(func,n){
    for(let i=1;i<=n;i++){
        func();
    }
}

let greet1=function(){
    console.log("hello");
}

multipleGreet(greet1,5);



function oddOrEvenFactory(request){
    if(request=="odd"){
        let odd=function(n){
            console.log(!(n%2==0));
        }
        return odd;
    }
    else if(request=="even"){
        let even=function(n){    
            console.log(n%2==0);
        }
        return even;
    }else{
        console.log("Invalid request");
    }
}

let request="odd";


//Methods -> action that can be performed on object

const calculator={
    num:55,
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    }
};

//calculator.add(1,2);

//shorthand

const calculator1={
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    }
};