/* 02 - FORM VALIDATION :: YOUR CODE BELOW */


// General Variables
document.querySelector('.validation--username').textContent = "";
var formText = document.forms.generalForm;

//Function

formText.addEventListener('submit', function(e) {
  e.preventDefault();

// Local Variables

  var userInput = e.target.elements.username.value;
  var passwordInput = e.target.elements.userpassword.value;
  var passwordInputConf = e.target.elements.confirmpassword.value;
  var taxIdNum = e.target.elements.taxid.value;
  var listOfAccounts = formText.elements.account.value;
  var checkBoxTrmsOfSvc = formText.elements.termsofservice;

// Output Variables

  var userValidText = document.querySelector('.validation--username');
  var passwordValidText = document.querySelector('.validation--user-password');
  var confirmPasswordValidText = document.querySelector('.validation--confirm-password');
  var taxIdValidText = document.querySelector('.validation--tax-id');
  var accountValidText = document.querySelector('.validation--account');
  var termsOfServiceValidText = document.querySelector('.validation--terms-of-service');

  var validationOfEntireForm = document.querySelector('.validation--entire-form');

// Validation of username



  if (userInput === "") {
    userValidText.textContent = "Username cannot be blanck";
  } else {
    userValidText.textContent = "Success";
  }

// Validation of Password


  if (passwordInput.length < 8) {
    passwordValidText.textContent = "Passwords must have a minimum of 8 characters";
  } else {
    passwordValidText.textContent = "Success";
  }

// Validation of Confirm Password


  if (passwordInputConf !== passwordInput || passwordInputConf === "") {
    confirmPasswordValidText.textContent = "Passwords must match";
  } else {
    confirmPasswordValidText.textContent = "Success";
  }

// Validation of Tax id

  if (taxIdNum === "") {
    taxIdValidText.textContent = "Must provide Tax ID Number ";;
  } else if (taxIdNum*1 > 0 && taxIdNum.length === 10 ) {
    taxIdValidText.textContent = "Success";
  } else {
    taxIdValidText.textContent = "Tax ID Number is only numbers and is 10 digits";
  }

// Validation of Account list options

  if (listOfAccounts === "") {
    accountValidText.textContent = "Must select account type";
  } else {
    accountValidText.textContent = "Success";
  }

// Validation of Check Box

    if(checkBoxTrmsOfSvc.checked === false) {
    termsOfServiceValidText.textContent = "Must approve terms of service";
  } else {
    termsOfServiceValidText.textContent = "Success";
  }

// Validation of FORM

  if ((userValidText.textContent,
  passwordValidText.textContent,
  confirmPasswordValidText.textContent,
  taxIdValidText.textContent,
  accountValidText.textContent,
  termsOfServiceValidText.textContent) === 'Success') {
    validationOfEntireForm.textContent = "Form Completed";
  }


})