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

   var form = $(this);
   var json = convertFormtoJson(form);
   
   json_company = JSON.parse(localStorage.getItem('employeeForm'));

   if (json_company.emailemployee == "" && json_company.passwordemployee == "") {
      console.log("no field"); 
      emailValidate(c_email);
      passwordValidate(c_password);
   } else if(json_company.emailemployee === c_email.value && json_company.passwordemployee === c_password.value){
      $.ajax({
         type: "GET",
         url: "/form.json",
         data: json,
         dataType: "json",
      });
      localStorage.setItem('loginForm', JSON.stringify(json));
      window.location.href = "https://moovenapp.herokuapp.com/userPanel.html";
      // window.location.href = "http://localhost:3000/userpanel.html";
   }else{
      modal.open( {content: $("<p class='txt-modal'>Something is wrong! check your email and/or password and try again!</p>")}, "https://moovenapp.herokuapp.com/#login" );
      // modal.open( {content: $("<p class='txt-modal'>Something is wrong! check your email and/or password and try again!</p>")}, "http://localhost:3000/#login" );
      console.log("no match"); 
   }

});

