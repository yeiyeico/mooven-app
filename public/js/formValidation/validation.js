// // company validation form

function basicValidateSetTooltips(inputField, tooltip_container){
  tooltip_container.innerHTML  = "";
  
  if(inputField === undefined || inputField.value === "" || inputField.length < 3){
    inputField.focus();
    inputField.style.outlineColor = "red";
    inputField.style.border       = "1px solid rgb(142, 9, 9)";
    tooltip_container.innerHTML   = "Please enter valid text for input field:"  + inputField.name;
    return false;
  }
  return true;
}

function basicFieldValidate(inputField){  
  var tooltip_container   = document.getElementById('tooltip_message_'+ inputField.name);
  return basicValidateSetTooltips(inputField, tooltip_container);
}

function emailValidate(emailInput){
  var tooltip_container = document.getElementById('tooltip_message_email');
  basicValidateSetTooltips(emailInput, tooltip_container);

  var regex_email   = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if(!regex_email.test(emailInput.value)){
    emailInput.focus();
    emailInput.style.outlineColor   = "red";
    emailInput.style.border         = "1px solid rgb(142, 9, 9)";
    tooltip_container.innerHTML     += "You need a @ and a . in your email!";
    tooltip_container.style.display = "block";
    return false;
  }
  return true;
}

function passwordValidate(passwordInput){
  var tooltip_container  = document.getElementById('tooltip_message_password');
  var regex_password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  
  basicValidateSetTooltips(passwordInput, tooltip_container);

  if(!regex_password.test(passwordInput.value)){
    passwordInput.focus();
    passwordInput.style.outlineColor = "red";
    passwordInput.style.border       = "1px solid rgb(142, 9, 9)";
    tooltip_container.innerHTML     += "Your password should have: 1 Mayus, 1 Minus, a number, and at less 8 characters";
    return false;
  }
  return true;
}
