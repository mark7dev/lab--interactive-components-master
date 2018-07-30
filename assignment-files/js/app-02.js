/* 02 - FORM VALIDATION :: YOUR CODE BELOW */


//USERNAME
var username = formulario.elements.username;
var usernameText = username.value;

//PASSWORD
var password = formulario.elements.userpassword;
var passwordText =  password.value;

//CONFIRM PASSWORD
var confirmPass = formulario.elements.confirmpassword;
var confirmPassText = confirmPass.value;

//TAX ID
var taxId = formulario.elements.taxid;
var taxIdText = taxId.value;

//ACCOUNT TYPE
var account = formulario.elements.account;
var accountSelect = account.value;

//TERMS OF SERVICE
var terms =  formulario.elements.termsofservice;
var termsCheck = terms.checked;

/*START SECTION TO COMPROBATE VALUES*/

//USERNAME
if(usernameText === "") {
    document.querySelector('.validation--username').textContent = 'This field can not be blank'
} else if(usernameText !== "") {
    document.querySelector('.validation--username').textContent = 'Success'}

//PASSWORD
if(passwordText === "" || passwordText.length < 8) {
    document.querySelector('.validation--user-password').textContent = 'The password must have a minimum of 8 carecteres'
} else if(passwordText.length > 8) {
    document.querySelector('.validation--user-password').textContent = 'Success';}

//CONFIRM PASSWORD
if(confirmPassText !== passwordText || passwordText === "") {
    document.querySelector('.validation--confirm-password').textContent = 'Password must match';
} else if(confirmPassText === passwordText) {
    document.querySelector('.validation--confirm-password').textContent = 'Success';
}

//TAX ID
if(typeof taxId !== "number" && taxId.length < 10) {
    document.querySelector('.validation--tax-id').textContent = 'Tax ID is only a numbers and is 10 digits';
} else if(typeof taxId === "number" && taxId.length === 10) {
    document.querySelector('.validation--tax-id').textContent = 'Success';
}

//ACCOUNT TYPE
if(accountSelect === "") {
    document.querySelector('.validation--account').textContent = "Must select account type";
} else if (accountSelect !== "") {
    document.querySelector('.validation--account').textContent = "Success";
}

//TERMS OF SERVICE
if(termsCheck === false) {
    document.querySelector('.validation--terms-of-service').textContent = 'Must approve terms of service';
} else if(termsCheck === true) {
    document.querySelector('.validation--terms-of-service').textContent = 'Success';
}

//FOMR CHECKOUT
if(usernameText !== "" && passwordText.length > 8 && confirmPassText === passwordText && typeof taxId === "number" && taxId.length === 10 && accountSelect !== "" && termsCheck === true) {
    document.querySelector('.validation--entire-form').textContent = 'Form Complete'
    var form = document.forms.formulario;
    form.addEventListener('submit', function(event) {
        event.preventDefault();
    })  
} else if(usernameText === "" || passwordText === "" || passwordText.length < 8 || typeof taxId !== "number" && taxId.length < 10 || accountSelect === "" || termsCheck === false) {

}