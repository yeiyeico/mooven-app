// company validation form

function basicValidateSetTooltips(inputField, tooltip_container){
  tooltip_container.innerHTML     = "";
  tooltip_container.style.display = "none";
  inputField.style.outlineColor   = "grey";

  if(inputField === undefined || inputField.value === "" || inputField.length < 3){
    inputField.focus();
    inputField.style.outlineColor   = "red";
    tooltip_container.style.display = "inherit";
    tooltip_container.innerHTML     = "<span class='tooltip'>"+"Please enter valid text for this input"+"</span>";
    return false;
  }
  return true;
}

// basic fields validate

function basicFieldValidate(inputField){  
  var tooltip_container   = document.getElementById('tooltip_message_'+ inputField.name);
  return basicValidateSetTooltips(inputField, tooltip_container);
}

// email validate

function emailValidate(emailInput){
  var tooltip_container = document.getElementById('tooltip_message_'+ emailInput.name);
  basicValidateSetTooltips(emailInput, tooltip_container);

  var regex_email   = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if(!regex_email.test(emailInput.value)){
    emailInput.focus();
    emailInput.style.outlineColor   = "red";
    emailInput.style.border         = "1px solid rgb(142, 9, 9)";
    tooltip_container.innerHTML     += "<span class='tooltip'>"+"You need a @ and a . in your email!"+"</span>";
    tooltip_container.style.display = "inherit";
    return false;
  }
  return true;
}

// password validate

function passwordValidate(passwordInput){
  var tooltip_container = document.getElementById('tooltip_message_'+ passwordInput.name);
  var regex_password    = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  
  basicValidateSetTooltips(passwordInput, tooltip_container);

  if(!regex_password.test(passwordInput.value)){
    passwordInput.focus();
    passwordInput.style.outlineColor = "red";
    passwordInput.style.border       = "1px solid rgb(142, 9, 9)";
    tooltip_container.style.display  = "inherit";
    tooltip_container.innerHTML      += "<span class='tooltip'>"+"Your password should have: 1 Mayus, 1 Minus, a number, and at less 8 characters"+"</span>";
    return false;
  }
  return true;
}

