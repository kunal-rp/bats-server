let login_btn = document.getElementById("login_submit");
login_btn.addEventListener("click",checkPassword);
function checkPassword(){
    let password = document.getElementById("password");
    if(password.innerHTML === ""){
        password.classList.add('password_error');
    }
}

let email = document.getElementById("email");
let email_label = document.getElementById("email-label");
email.addEventListener("input", checkEmail);

function checkEmail(){
    if(email.value !== ''){
        email.classList.add('email_populated');
        email_label.classList.add('email_label_valid');
    }
  
}
