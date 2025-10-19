let todo=[];

request=prompt("Please enter your request");

while(true){
    if(request=="quit"){
        console.log("quitting app");
        break;
    }

    if(request=="list"){
        console.log("-------------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("-------------");
    }
    else if(request=="add"){
        let task=prompt("Please enter the task you want to add");
        todo.push(task);
        console.log("task added");
    }
    else if(request=="delete"){
        let idx=prompt("Please enter the task idx");
        todo.splice(idx,1);
        console.log("task delete");
    }
    else{
        console.log("wrong request");
    }
    request=prompt("Please enter your request");
}