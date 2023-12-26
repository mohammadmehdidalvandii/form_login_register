const inputEmail = document.querySelector('#input_email');
const inputPassword = document.querySelector("#input_password");
const inputUser = document.querySelector('#input_user');
const inputReEmail = document.querySelector('#inputRegister_email')
const inputRePassword = document.querySelector("#inputRegister_password")
const formLogin = document.querySelector('#form_login');
const formRegister = document.querySelector('#form_register');
const btnRegister = document.querySelector("#btn_register");
const btnLogin = document.querySelector("#btn_login");
const elemRegister = document.querySelector("#wrapper_register");
const elemLogin = document.querySelector('#wrapper_login');
const wrapper = document.querySelector('#wrapper')
const formBtn = document.querySelector('.form_btn')

const textError = document.querySelector(".text_error")
const errorText = document.querySelector('.error_text')

// start  handler change form between login and register


function handlerLoginForm(){
    if(elemLogin.style.display === 'none'){
        elemRegister.style.display = 'none'
         elemLogin.style.display = 'block';
         btnLogin.classList.add('form_btnActive');
         btnRegister.classList.remove('form_btnActive');}
}

function handlerRegisterForm(){
    if(elemRegister.style.display === 'none'){
                elemRegister.style.display = 'block';
                elemLogin.style.display = 'none';
                btnLogin.classList.remove('form_btnActive')
                btnRegister.classList.add('form_btnActive');
 
            }
}

btnRegister.addEventListener('click' , handlerRegisterForm)
btnLogin.addEventListener('click' , handlerLoginForm)
// End  handler change form between login and register


// start handler validation form 


function isValidEmail() {
    if (inputEmail.value === '') {
        textError.innerHTML = 'مقدار ایمیل اجباری است';
    } else {
        textError.innerHTML = '';
    }
}

function isValidPassword() {
    if (inputPassword.value === '') {
        textError.innerHTML = 'مقدار رمزعبور اجباری است';
    } else if (inputPassword.value.length < 8) {
        textError.innerHTML = 'مقدار رمزعبور باید حداقل 8 کاراکتر باشد';
    } else {
        textError.innerHTML = '';
    }
}

function isValidUser() {
    if (inputUser.value === '') {
        errorText.innerHTML = 'مقدار نام کاربری اجباری است';
    } else if (inputUser.value.length < 4) {
        errorText.innerHTML = 'مقدار نام کاربری باید حداقل 4 کاراکتر باشد';
    } else {
        errorText.innerHTML = '';
    }
}

function isValidReEmail(){
    if (inputReEmail.value === '') {
        errorText.innerHTML = 'مقدار ایمیل اجباری است';
    } else {
        errorText.innerHTML = '';
    }
}
function isValidRePassword(){
    if (inputRePassword.value === '') {
        errorText.innerHTML = 'مقدار رمزعبور اجباری است';
    } else if (inputRePassword.value.length < 8) {
        errorText.innerHTML = 'مقدار رمزعبور باید حداقل 8 کاراکتر باشد';
    } else {
        errorText.innerHTML = '';
    }
}
function handlerBlurEmail (){
    isValidEmail()
}
function handlerBlurPassword(){
    isValidPassword()
}
function handlerBlurUser (){
    isValidUser()
}

function handlerReEmail (){
    isValidReEmail()
}

function handlerRePassword (){
    isValidRePassword()
}
inputEmail.addEventListener('blur' ,  handlerBlurEmail)
inputPassword.addEventListener('blur' ,  handlerBlurPassword)
inputUser.addEventListener('blur' ,  handlerBlurUser)
inputReEmail.addEventListener('blur', handlerReEmail)
inputRePassword.addEventListener('blur', handlerRePassword)
