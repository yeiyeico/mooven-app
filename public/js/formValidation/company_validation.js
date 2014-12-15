function onSubmitCompany (){
  event.preventDefault();
  var c_name     = document.getElementById('company_name');
  var c_address  = document.getElementById('company_address');
  var c_email    = document.getElementById('company_email');
  var c_password = document.getElementById('company_password');

  basic_fields = [c_name, c_address];

  for(i =0; i < basic_fields.length; i++){
      basicFieldValidate(basic_fields[i]);
  }

  emailValidate(c_email);
  passwordValidate(c_password);
};
