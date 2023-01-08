
async function ReqFromApi(){
    let result = await fetch(`http://localhost:5294/home`);
    result = await result.json();
    console.log(result.message);
    document.getElementById("name").innerText = result.message;
};

async function getAllNames(){
    console.log("inside getAllNames");
    let result = await fetch('http://localhost:5294/allNames');
    result = await result.json();
    let ul = document.getElementById("ul");
    ul.innerHTML="";
    if(result.message==="success"){
        console.log(result)
        for(let i=0;i<result.data.length;i++){
            let li = document.createElement("li");
            li.innerText=result.data[i];
            ul.appendChild(li);
        }
    }else{
        alert("some issue at getAllNames");
    }
}

// fetchByIndex
async function fetchByIndex(){
    console.log("inside fbI");
    let input = document.getElementById("index-input");
    let index = input.value;
    console.log(index);
    let result = await fetch(`http://localhost:5294/getByIndex/${index}`);
    result= await result.json();
    if(result){
        console.log(result);
        document.getElementById("name").innerText = result.name;
        document.getElementById("edit-input").value = result.name;
    }else{
        alert("issue at fetchByIndex")
    }
}

// deleteByIndex
async function deleteByIndex(){
    let input = document.getElementById("del-index-input");
    let index = input.value;
    let result = await fetch(`http://localhost:5294/deleteByIndex/${index}`,{
        method:'DELETE',
    });
    result = await result.json();
    if(result){
        document.getElementById("name").innerText=result.message;
    }else{
        alert("issue at deleteByIndex")
    }
}

// editName
async function editName(){
    let currentName = document.getElementById("edit-input").value;
    let input = document.getElementById("index-input");
    let index = input.value;
    let result = await fetch(`http://localhost:5294/editName`,
    {
        headers:{
        "Content-Type": "application/json",
        },
        method:'PUT',
        body:JSON.stringify({"name":currentName,"index":index})
    });
    result= await result.json();
    if(result){
        console.log(result);
        document.getElementById("name").innerText = result.message;
    }else{
        alert("issue at editName")
    }
}
