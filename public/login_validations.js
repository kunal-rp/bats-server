let login_btn = document.getElementById("login_submit");
login_btn.addEventListener("click",checkPassword);
let password_error_message = document.getElementById('password_error_message');
function checkPassword(){
    let password = document.getElementById("password");
    if(password.value === ""){
        password.classList.add('password_error');
        password_error_message.classList.remove('password_message');
        password_error_message.classList.add('password_message_error');

    }
}

let email = document.getElementById("email");
let email_label = document.getElementById("email-label");
email.addEventListener("input", checkEmail);

function checkEmail(){
    let email_parts = email.value.split('@');
    if(email.value !== '' && email_parts.length === 2){
        email.classList.add('email_populated');
        email_label.classList.add('email_label_valid');
    }
  
}
