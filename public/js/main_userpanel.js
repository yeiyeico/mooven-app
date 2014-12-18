$(function(){
   Router.runUserpanel();
   Router.observeLinks();
   json_company = JSON.parse(localStorage.getItem('employeeForm'));
   $('.title-user').append("Hello! " + json_company.name);
   $('.session_name').append(json_company.name + " " + json_company.lastname);
});

