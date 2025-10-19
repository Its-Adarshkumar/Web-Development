
let btn=document.querySelector("button");
btn.addEventListener("click", async ()=>{
    let  fact= await getFacts();
    console.log(fact);
    let result=document.querySelector("#result");
    result.innerText=fact;
});


let url="https://catfact.ninja/fact";

// fetch(url)
// .then((response)=>{
//     console.log(response);
//      return response.json();
// })
// .then((data)=>{
//     console.log("data1",data.fact);
//     return fetch(url);
// })
// .then((response)=>{
//     return response.json();
// })
// .then((data2)=>{
//     console.log("data2=",data2);
// })
// .catch((errror)=>{
//     console.log("Error: " ,error);
// });

// async function getFacts() {
//     try{
//             let response = await fetch(url);
//     let data = await response.json();
//     console.log("data=", data.fact);
//     }catch(error){
//         console.log("Error: ", error);
//     }
// }

async function getFacts() {
    try{
        let response=await axios.get(url);
        return response.data.fact;
    }catch(e){
        return "No fact found";
    }
}


// to show image 

let url2="https://dog.ceo/api/breeds/image/random";

let btn2=document.querySelector("#dog");
btn2.addEventListener("click",async ()=>{
    let link= await getImage();
    let img=document.querySelector("#result2");
    img.setAttribute("src", link);
    console.log(link);
});

async function getImage() {
    try{
        let res=await axios.get(url2);
        return res.data.message;
    }
    catch(e){
        return "No image found";
    }
}


// data in JSON format with headers
const url3="https://icanhazdadjoke.com/";

async function getJoke() {
    try{
        const config={ headers:{Accept: "application/json"} };
        let res=await axios.get(url3,config);
        console.log(res.data);
    }catch(e) {
        console.log("Error: ", e);
    }
}

// updating query strings

let url4="http://universities.hipolabs.com/search?name=";

let btn3=document.querySelector("#search");
btn3.addEventListener("click",async ()=>{
    let country=document.querySelector("input").value;
    console.log(country);

    let colleges= await getColleges(country);
    console.log(colleges);
    show(colleges);
});

function show(colleges) {
    let list=document.querySelector("#list");
    list.innerText=""; // clear previous results
    for ( col of colleges){
        console.log(col.name);

        // create a list item for each college
        let li=document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li);
    }
}

async function getColleges(country){
    try{
        let res=await axios.get(url4+country);
        return res.data;
    }catch(e) {
        return [];
    }
}