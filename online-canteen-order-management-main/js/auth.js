// Show / Hide Password

const password = document.getElementById("password");
const showPassword = document.getElementById("showPassword");

showPassword.addEventListener("change", () => {

    password.type = showPassword.checked ? "text" : "password";

});

// Login

document.getElementById("loginForm").addEventListener("submit", function(e){

    e.preventDefault();

    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(u => u.email === email && u.password === pass);

    if(user){

        alert("Login Successful!");

        localStorage.setItem("loggedInUser", JSON.stringify(user));

        window.location.href = "dashboard.html";

    }else{

        alert("Invalid Email or Password");

    }

});