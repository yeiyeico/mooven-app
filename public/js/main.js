 $('#register_company, #register_employee').hide();
 $("ol.sub-nav").hide();

$('#home_btn').click(function(){
	$('#register_company, #register_employee').hide();
	$('#main_home').show();
});


$('#company_register').click(function(){
	$('#main_home, #register_employee').hide();
	$('#register_company').show();
});

$('#employee_register').click(function(){
  $('#main_home, #register_company').hide();
  $('#register_employee').show();
});

$('#login_btn').click(function(){
  $('#main_home, #register_company, #register_employee').hide();
  $('#login').show();
});

$("#regiter_btn").mouseover(function(){
  $("ol.sub-nav").slideToggle('fast');   
});

$("ol.sub-nav, #main_nav").mouseleave(function(){
  $("ol.sub-nav").slideUp('fast');
});


$("#company_register, #employee_register").click(function(){
  $("ol.sub-nav").slideUp('fast');
});