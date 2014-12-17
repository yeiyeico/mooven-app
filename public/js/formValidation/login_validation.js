// login validation form
function convertFormtoJson(form){
   var array = $(form).serializeArray();
   var json = {};

   jQuery.each(array, function() {
      json[this.name] = this.value || '';
   });  
   return json;
}


$('#form_login').bind('submit', function(event){  
   event.preventDefault(); 
   // var c_company  = document.getElementById('login_company');
   var c_email    = document.getElementById('login_email');
   var c_password = document.getElementById('login_password');

   // basic_fields = [c_company];

   // for(i = 0; i < basic_fields.length; i++){
   //    var basicFields_ok = basicFieldValidate(basic_fields[i]);
   // }

   var email_ok    = emailValidate(c_email);
   var password_ok = passwordValidate(c_password);

   var form = $(this);
   var json = convertFormtoJson(form);

   if(email_ok === true && password_ok === true){     
      $.ajax({
         type: "GET",
         url: "/form.json",
         data: json,
         dataType: "json",
      });
      localStorage.setItem('loginForm', JSON.stringify(json));
      window.location.href = "http://localhost:3000/userpanel.html";
   }

});

