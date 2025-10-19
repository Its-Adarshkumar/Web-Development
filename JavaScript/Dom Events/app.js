// // let btn=document.querySelector('button');
// // console.dir(btn);

// // // btn.onclick=function(){
// // //    alert('button was clicked');
// // // };

// function sayHello(){
//     alert('Hello');
// }

// // btn.onclick=sayHello;

// function sayName(){
//     alert('Apna college');
// }

// let btns=document.querySelectorAll('button');

// for (btn of btns){
//     // btn.onclick=sayHello;
//     // btn.onclick=sayName;
//     // console.dir(btn);
//     // btn.onmouseenter=function(){
//     //     console.log('mouse entered');
//     // };

//     // btn.addEventListener('click',sayHello);
//     // btn.addEventListener('click',sayName);
//     btn.addEventListener('dblclick',function(){
//         console.log('double clicked');
//     });
// }

// let p=document.querySelector('p');

// p.addEventListener('click',function(){
//     console.log('paragraph is clicked');
// });

// //this in Event Listener

// let btn=document.querySelector('button');
// let p=document.querySelector('p');
// let h1=document.querySelector('h1');
// let h3=document.querySelector('h3');


// function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor='red';
// }

// btn.addEventListener('click',changeColor);

// p.addEventListener('click',changeColor);

// h1.addEventListener('click',changeColor);

// h3.addEventListener('click',changeColor);

// let btn=document.querySelector('button');

// btn.addEventListener('click',function(event){ 
//     console.log(event);
//     console.log('button is clicked');   
// });


//keyBoard Events
// let inp=document.querySelector('input');

// inp.addEventListener('keydown',function(event){
//     // console.log("key=",event.key);
//     console.log("code=",event.code);//ArrowUp(U) ,ArrowDown(D),ArrowLeft(L),ArrowRight(R)
//     if(event.code=='KeyU'){
//         console.log('character moves up');
//     }else if(event.code=='KeyD'){
//         console.log('character moves down');
//     }else if(event.code=='KeyL'){
//         console.log('character moves left');
//     }else if(event.code=='KeyR'){
//         console.log('character moves right');
//     }    
// });

//Form Events

// let form=document.querySelector('form');

// form.addEventListener('submit',function(event){
//     event.preventDefault();
//     alert('form submitted');
// });

//Extracting Form Data

// let form=document.querySelector('form');

// form.addEventListener('submit',function(event){
//     event.preventDefault();
   
//     let inp=document.querySelector('input');
//     console.dir(inp);
//     console.log(inp.innerText); //not used
//     console.log(inp.value); //input ki value ke liye
// });


// form.addEventListener('submit',function(event){
//     event.preventDefault();
   
//     console.dir(form);
//     let user=this.elements[0]; //form.elements[0]
//     let pass=this.elements[1];

//     // let user=document.querySelector('#user');
//     // let pass=document.querySelector('#pass');
   
//     console.log(user.value);
//     console.log(pass.value);

//     alert(`hi ${user.value} your password is set to ${pass.value}`);
// });

let form=document.querySelector('form');

form.addEventListener('submit',function(event){
    event.preventDefault();
});

let user=document.querySelector('#user');

user.addEventListener('change',function(){
    console.log('input changed');
    console.log('final value=',this.value);
});