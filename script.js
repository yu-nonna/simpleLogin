const loginText = document.querySelector(".title-text .login")
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup")
const signupLink = document.querySelector("form .signup-link a")

const signupForm = document.querySelector("form.signup");
const signupText = document.querySelector(".title-text .signup")

const submitBtn = document.querySelector("input[value = Login]")
const signupSubmit = document.querySelector("input[value = Signup]")

const validpassword = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword")
const signupPassword = document.getElementById("signupPassword");





signupBtn.onclick =  (() => {
    loginForm.style.marginLeft ="-50%";   
    loginText.style.marginLeft = "-50%";
    
});


loginBtn.onclick =  (() => {
    loginForm.style.marginLeft ="0%";  
    loginText.style.marginLeft = "0%"
 
});


signupLink.onclick =  (() => {
    loginBtn.click();
    return false;
});



submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    checkInputs();
});

signupSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    checkSignup();
});


function checkInputs() {
    let emailValue = email.value.trim();
    if(emailValue === ''){
        alert("Write your Email");

    }else if(!isEmailValid (emailValue)){
        alert("Invalid Email")
    }

    if(validpassword.value.length < 6){
        alert("Password should contain 6 or more characters")
    }   
}


function checkSignup() {
    if(signupEmail === ''){
        alert("Write your Email");

    }else if(!isEmailValid (signupEmail)){
        alert("Invalid Email")
    }

    if(signupPassword.value !== confirmPassword.value){
        alert("Your passwords don't match")
    }
};



function isEmailValid(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
