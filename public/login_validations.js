let login_btn = document.getElementById("login_submit");
login_btn.addEventListener("click",checkPassword);
function checkPassword(){
    let password = document.getElementById("password");
    console.log(password.innerHTML);
    if(password.innerHTML === ""){
        password.classList.add('password_error');
    }
}
