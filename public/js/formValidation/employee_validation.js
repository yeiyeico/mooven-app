// Employee validation form

function convertFormtoJson(form){
   var array = $(form).serializeArray();
   var json = {};

   jQuery.each(array, function() {
      json[this.name] = this.value || '';
   });  
   return json;
}


$('#form_employee').bind('submit', function(event){
   
   event.preventDefault(); 
   var c_name     = document.getElementById('employee_name');
   var c_lastname = document.getElementById('employee_lastname');
   var c_email    = document.getElementById('employee_email');
   var c_password = document.getElementById('employee_password');

   basic_fields = [c_name, c_lastname];

   for(i = 0; i < basic_fields.length; i++){
      var basicFields_ok = basicFieldValidate(basic_fields[i]);
   }

   var email_ok    = emailValidate(c_email);
   var password_ok = passwordValidate(c_password);

   var form = $(this);
   var json = convertFormtoJson(form);

   if(email_ok === true && password_ok === true && basicFields_ok === true ){          
      
      $.ajax({
         type: "GET",
         url: "/form.json",
         data: json,
         dataType: "json",
      });

      localStorage.setItem('employeeForm', JSON.stringify(json));
      console.log(json)
      modal.open( {content: $("<p class='txt-modal'>Registro Exitoso! <br> Bienvenido "+ json.name +"</p>")}, "http://localhost:3000/login.html" );
   }

});

