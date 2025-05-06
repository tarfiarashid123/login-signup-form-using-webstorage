// Function to Signup a new user:
function signup(){
    let username = document.getElementById("signupusername").value.trim();
    let userpassword = document.getElementById("signupuserpassword").value.trim();

    if(username === "" || userpassword === ""){
        alert("Enter a valid username and password");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || {};

    if(users[username]){
        alert("Username already taken! Try another one.");
        return;
    }

    users[username] = userpassword;
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful! Please Login.");
    window.location.href = "login.html";
}

// Function to Log In a user:
function login(){
    let username = document.getElementById("loginusername").value.trim();
    let userpassword = document.getElementById("loginuserpassword").value.trim();

    if(username === "" || userpassword === ""){
        alert("Enter your username and password");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || {};
    let storedpassword = users[username];

    if(storedpassword === userpassword){
        sessionStorage.setItem("loggedInUser", username);
        alert("Login Successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Incorrect username or password!");
    }
}

// Check if user is logged in when Dashboard loads
window.onload = function(){
    if(window.location.pathname.includes("dashboard.html")){
        let user = sessionStorage.getItem("loggedInUser");

        if(!user){
            window.location.href = "login.html";
        } else {
            document.getElementById("welcomemsg").innerText =`Welcome, ${user}`;
        }
    }
};

// Function to Logout the user:
function logout(){
    sessionStorage.removeItem("loggedInUser");
    window.location.href = "login.html"; 
}

// Function to Toggle Password Visibility:
function signupicon() {
    const passwordInput = document.getElementById('signupuserpassword');
    const eyeIcon = document.getElementById('signupEyeIcon');
    
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    } else {
        passwordInput.type = "password";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    }
}
function loginicon() {
    const passwordInput = document.getElementById('loginuserpassword');
    const icon = document.querySelector('loginEyeIcon');
    
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    } else {
        passwordInput.type = "password";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }
}

