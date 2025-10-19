// function hello() {
//   console.log('Hello');
// }

// function demo(){
//     console.log('Demo');
//     hello();
// }

// demo();

//BreakPoints

// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     let ans= two() + one();
//     console.log(ans);
// }

// three();

// Js is single threaded and synchronous nature

// browser can do multiple threading

// setTimeout(() => {
//     console.log('apna college');
// }, 2000);


//callback Hell

h1=document.querySelector('h1');

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                let num=Math.floor(Math.random()*5)+1;
                if(num>3){
                    reject("promise rejected");
                }
        h1.style.color=color;
        resolve("color changed!");
    },delay);
    });
}

async function name() {
    try{
        await changeColor('red',1000);
        await changeColor('blue',1000);
        await changeColor('orange',1000);
        await changeColor('green',1000);  
    }
    catch(error){
        console.log("error caught");
        console.log("error:", error);
    }

   let a=5;
   console.log(a);
   console.log("value :",a+3);

}

// changeColor('red',1000)
//     .then(()=>{
//         console.log('color changed to red');
//         return changeColor('blue',1000);
//     })
//     .then(()=>{
//         console.log('color changed to blue');
//         return changeColor('orange',1000);
//     })
//     .then(()=>{
//         console.log('color changed to orange');
    // })


// changeColor('red',1000,()=>{
//     changeColor('blue',1000,()=>{
//         changeColor('orange',1000);
//     });
// });

// //Promises

// function savetoDb(data,success,failure){
//     let internetSpeed=Math.floor(Math.random()*10)+1;
   
//     if(internetSpeed>4){
//         success();
//     }else{
//         failure();
//     }
// }

// savetoDb('apna college',
//     ()=>{ //function 1
//     console.log('success: your data was saved');
//     savetoDb('hello world',()=>{ //function 1 part
//         console.log("success2: data2 saved");
//     },
//     ()=>{ //function 1 part
//         console.log("failure2: weak connection");
//     });
//     },
//     ()=>{ //alag function
//     console.log('failure: Weak connection.data was not saved');
// });


// function savetoDb(data){
   
//    return new Promise((resolve,reject)=>{
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//         resolve('success : data was saved');
//     }else{
//         reject('failure : weak connection');
//     }
//    });
   

// }

// then() and catch() methods
// let request=savetoDb('apna college');
// request.then(()=>{
//     console.log('Promise was resolved');
//     console.log(request);
// })
// .catch(()=>{
//     console.log('promised was rejected');
//     console.log(request);
// });

// improved version used instead of callback hell

// savetoDb('apna college')
// .then((request)=>{
//     console.log('data1 Saved : Promised was resolved');
//     console.log("result of promise:",request)
//     return savetoDb('helloWorld');
// })
//   .then((request)=>{
//     console.log('data2 saved');
//     console.log("result of promise:",request);
//     return savetoDb("adarsh");
//   })
// .catch((error)=>{
//     console.log('promised was rejected');
//     console.log("error:", error);
// });

//async function

//  async function greet(){
//     // throw "weak connection";
//     return "hello";
// }

// greet()
// .then((result)=>{
//     console.log("Promise resolved");
//     console.log("result of promise:", result);
// })
// .catch((error)=>{
//     console.log("promise was rejected with error:",error)
// });


// let demo= async ()=>{
//     return 5;
// }

// await

// function getNum(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num=Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         },1000);
//     });
// }

// async function demo() {
//     await getNum();
//     await getNum();
//     getNum();
// }
