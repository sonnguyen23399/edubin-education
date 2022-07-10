
const firstName = document.querySelector('#firstname')
const lastName = document.querySelector('#lastname')
const userName = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const passwordConfirm = document.querySelector('#password-confirm')
const registerBtn = document.querySelector('.register-btn')

const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

//password must be eight characters
const validPasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

registerBtn.addEventListener('click', () => {
    const firstnameField = 'firstname-field'
    const lastnameField = 'lastname-field'
    const usernameField = 'username-field'
    if(firstName.value == '') {
        handleError(firstnameField, 'Vui lòng nhập first name')
    } else handleError(firstnameField, '')
    if(lastName.value == '') {
        handleError(lastnameField, 'Vui lòng nhập last name')
    } else handleError(firstnameField, '')
    if(userName.value == '') {
        handleError(usernameField, 'Vui lòng nhập user name')
    } else handleError(firstnameField, '')
    emailValid()
    passwordValid()
})

const emailValid = () => {
    let emailValue = email.value.trim()
    const emailField = 'email-field'
    if(emailValue == '') {
        handleError(emailField, 'Vui lòng nhập email')
    }
    else if(!emailValue.match(validEmailRegex)) {
        handleError(emailField, 'Email chưa đúng định dạng')
    } 
    else handleError(emailField, '')
}

const passwordValid = () => {
    let passwordValue = password.value
    let passwordConfirmValue = passwordConfirm.value
    const passwordField = 'password-field'
    const passwordConfirmField = 'password-confirm-field'
    if(passwordValue == '') {
        handleError(passwordField, 'Vui lòng nhập password')
    }
    else if(!passwordValue.match(validPasswordRegex)) {
        handleError(passwordField, 'Password ít nhất 8 ký tự bao gồm ký tự in hoa và đặc biệt')
    }
    else handleError(passwordField, '')
    
    if(passwordConfirmValue != passwordValue) {
        handleError(passwordConfirmField, 'Password Confirm chưa trùng với password')
    }
    else handleError(passwordConfirmField, '')
}

const handleError = (field, message) => {
    document.querySelector(`.${field} .error`).innerHTML = message
}

