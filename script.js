const form = document.getElementById("contactForm");

form.addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value;

let email=document.getElementById("email").value;

let message=document.getElementById("message");

if(name==="" || email===""){
message.innerText="Please fill all fields";
return;
}

if(!email.includes("@")){
message.innerText="Invalid Email";
return;
}

message.innerText="Form Submitted Successfully";

});

function addTask(){

let input=document.getElementById("taskInput");

let task=input.value;

if(task===""){
return;
}

let li=document.createElement("li");

li.innerText=task;

document.getElementById("taskList").appendChild(li);

input.value="";

}