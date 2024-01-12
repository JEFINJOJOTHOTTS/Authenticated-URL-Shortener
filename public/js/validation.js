
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const urlRegex=/^(ht|f)tp(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?$/;

const email = document.getElementById("mail")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")

//email varification
function emailValidation() {
    const emailValue = email.value
    if (!emailValue.match(emailRegex)) {
        email.style.color = "red";
        return false;
    }
    email.style.color = "#1e3932";

    console.log("email")
    return true
}

//show password
function showPassword() {
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}

//show confirm password
function showConfirmPassword() {
    if (confirmPassword.type === "password") {
        confirmPassword.type = "text";
    } else {
        confirmPassword.type = "password";
    }
}

function passwordValidation() {

    // Validate capital letters
    let upperCaseLetters = /[A-Z]/g;
    // Validate lowercase letters
    let lowerCaseLetters = /[a-z]/g;

    // Validate numbers
    let numbers = /[0-9]/g;
    if (

        password.value.match(lowerCaseLetters) && password.value.match(upperCaseLetters) && password.value.match(numbers) && password.value.length >= 8) {
        messagePasword.innerHTML = ""
        console.log("password")
        return true
    } else {
        messagePasword.innerHTML = "Hint : Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
        return false
    }

}

// confirm password
function confirmPasswordValidation() {
    if ($('#password').val() == $('#confirmPassword').val()) {
        $('#confirmMessage').html('')
        console.log("confirm")
        return true
    } else
        $('#confirmMessage').html('Not Matching');
    return false
}

function signUpValidateForm(event) {
    event.preventDefault()

    console.log("validate form")
    if (emailValidation() && passwordValidation() && confirmPasswordValidation()) {
        axios.post('/signup', { mail: email.value, password: password.value }).then(() => {
            swal({
                text: 'User Created',
                title: 'Need to Login',
                icon: 'success',

            }).then(() => {
                window.location.href = 'login'
            })
        }).catch(() => {
            swal({
                text: 'User Exist',
                title: 'Need to Login',
                icon: 'error',

            }).then(() => {
                window.location.href = 'login'
            })
        })

    } else {
        return false
    }
}


function loginValidateForm(event) {
    event.preventDefault()

    console.log("validate form")
    if (emailValidation() && passwordValidation()) {
        axios.post('/login', { mail: email.value, password: password.value }).then(() => {
            window.location.href = 'minify-url'

        }).catch((msg) => {
            messagePasword.innerHTML=msg
        })

    } else {
        return false
    }
}


