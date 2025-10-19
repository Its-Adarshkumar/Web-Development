// const student={
//     name:"adarsh",
//     age:23,
//     eng:95,
//     maths:93,
//     physics:97,
//     getAvg(){
//         console.log(this);
//         let avg=(this.eng+this.maths+this.physics)/3;
//         console.log(`${this.name} got avg marks=${avg} `);
//     }
// };

function getAvg(){
    console.log(this);
}

// try and catch

console.log("hello");
console.log("hello");
// let a=10;
try{
    console.log(a);
}
catch{
    console.log("variable is not defined");
}

//Arrow function =>nameless function
const sum=(a,b)=>{
    console.log(a+b);
};

const cube=(a)=>{
    return a*a*a;
};

const power=(a,b)=>{
    return a**b;
}

const hello=()=>{
    console.log("hello world");
}

//Arrow function =>implicit return

const mul=(a,b)=>(
    a*b
);

// set Timeout=> setTimeout(function,time in ms)
// console.log("hi there!");

// setTimeout( () => {
//     console.log("apna college");
// },4000);

// console.log("welcome to");

// set Interval=> setInterval(function,time in ms)

// console.log("hi there!");

// let id=setInterval( () => {
//     console.log("apna college");
// },2000);

// console.log("welcome to");

// console.log(id);

// clearInterval(id); to stop the interval


// this keyword with Arrow functions
const student={
    name:"adarsh",
    marks:95,
    prop:this, //global scope
    getName(){
        return this.name;
    },
    getMarks:()=>{
        console.log(this); //parent's scope -> window
        return this.marks; 
    },
    getInfo1:function(){
        setTimeout(()=>{
            console.log(this); //student
        },2000);
    },
    getInfo2:function(){
        setTimeout(function(){
            console.log(this); //window
        },2000);
    },
};

// practice question 

const sqr=(n)=>n*n;

// function that print hello world 5times at interval of 2s each

let id=setInterval(()=>{
    console.log("hello world");
},2000);


setTimeout(()=>{
    clearInterval(id);
},10000);