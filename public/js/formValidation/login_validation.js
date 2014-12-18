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

   if (json_company.email === "" && json_company.password === "") {
      console.log("no field"); 
   } else if(json_company.email === c_email.value && json_company.password === c_password.value){
      $.ajax({
         type: "GET",
         url: "/form.json",
         data: json,
         dataType: "json",
      });
      localStorage.setItem('loginForm', JSON.stringify(json));
      window.location.href = "http://localhost:3000/userpanel.html";
   }else{
      console.log("no match"); 
   }

});

