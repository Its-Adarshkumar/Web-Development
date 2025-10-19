//forEach

let arr=[1,2,3,4,5];
// let print =function(el){
//     console.log(el);
// };

// arr.forEach(print);

// arr.forEach(function(el){
//     console.log(el);
// });

// arr.forEach((el)=>{
//     console.log(el);
// });

let array=[{
    name:"adarsh",
    marks:90,
},
{
    name:"aman",
    marks:80,
},
{
    name:"anuj",
    marks:70,
}
]

// array.forEach((student)=>{
//     console.log(student.marks);
// })


//map

let num=[1,2,3,4];

let double=num.map((el)=>{
    return el*2;
})

let student=[{
    name:"adarsh",
    marks:90,
},
{
    name:"aman",
    marks:80,
},
{
    name:"anuj",
    marks:70,
}
]

let Gpa=student.map((el)=>{
    return el.marks/10;
})


//filter
// let nums=[1,2,3,4,5,6,7,8,9,10,11];
// let ans=nums.filter((el)=>{
//     return el%2==0;// even->true and odd->false
// })

//Every
// [2,4,6].every((el)=>{
//     el%2==0;
// });

//some

//Reduce-> Reduce the array to a single value
let nums=[1,2,3,4];
let finalVal=nums.reduce((res,el)=>{
    return res+el;
});
console.log(finalVal);

let arrs=[1,4,2,5,6,7,2,9,2,];

let maxVal=arrs.reduce((max,el)=>{
    if(max<el){
        return el;
    }else{
        return max;
    }
});

console.log(maxVal);

//Practice questions

// check if all the elements are multiple of 10 or not

let arr1=[10,20,30,40,50,60,70,80,90,100];

let check=arr1.every((el)=>{
    return el%10==0;
})

console.log(check);

// create a function to find min in an array

let min=arr1.reduce((min,el)=>{
    if(min>el){
        return el;
    }else{
        return min;
    }
});

console.log(min);

//Default parameters

function sum(a,b=2){
    return a+b;
}

console.log(sum(5,3));
console.log(sum(2));

// not possible case
// function sum(a=2,b){
//     return a+b;
// }

// sum(1); //a=1,b=undefined

//spread
let arr2=[1,5,9,9,5,3,7,6,2]
console.log(...arr2);
console.log(arr2);
console.log(..."apnacollege");

//spread with Literals
let newArr=[...arr2];
console.log(newArr);

let char=[..."hello"];

let odd=[1,3,5,7,9];
let even=[2,4,6,8,10];

let number=[...odd,...even];

//spread with object Literals

let data={
    email:"ironman@gmail.com",
    password:"abcd",
};

let datacopy={...data,id:123};

let obj1={...odd};//obj->key,values

//Rest 

// function addition(...args){
//     for(let i=0;i<args.length;i++){
//         console.log("you gave us: ",args[i]);
//     }
// }

function addition(...args){
    return args.reduce((sum,el)=>sum+el);
}

function minimum(){
    console.log(arguments);
    console.log(arguments.length);
    arguments.push(1); //arguments is collection not an array
}

function minimum(msg,...args){
    console.log(msg);
    return args.reduce((min,el)=>{
        if(min>el){
            return el;
        }else{
            return min;
        }
    })
};

//Destructuring
let names=["tony","bruce","peter","steve"];
// let winner =names[0];
// let runnerup=names[1];

let [winner,runnerup]=names;
console.log(winner,runnerup);

//combining Rest and Destructuring
// let [winner,runnerup,...others]=names;

//Destructuring with Objects
const stud={
    name:"adarsh",
    age:19,
    class:13,
    subjects:["hindi","english","maths","science"],
    username:"adarsh123",
    password:"abcd",
};

// let username=stud.username;
// let password=stud.password;

// let {user,pass}=stud; // undefined 

let {username,password}=stud;

let{username:user, password:pass}=stud;
