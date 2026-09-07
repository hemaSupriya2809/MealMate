document.getElementById("signupForm").addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let phone=document.getElementById("phone").value;
let password=document.getElementById("password").value;
let confirm=document.getElementById("confirmPassword").value;

if(password!=confirm){

alert("Passwords do not match");

return;

}

let users=JSON.parse(localStorage.getItem("users")) || [];

let check=users.find(user=>user.email===email);

if(check){

alert("Email already exists");

return;

}

users.push({

name:name,
email:email,
phone:phone,
password:password

});

localStorage.setItem("users",JSON.stringify(users));

alert("Registration Successful");

window.location.href="login.html";

});