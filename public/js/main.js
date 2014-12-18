
$(function(){
	Router.runHome();
	Router.activeSectionHome();
});


$('#home_regitercompany').click(function(){
	$('#main-home, #register_employee, #login-home').hide();
	$('#register_company').show();
});


$('#btn_loginemployee').click(function(){
	$('#main-home, #register_company, #register_employee').hide();
	$('#login-home').show();
});

$("#regiter_btn").mouseover(function(){
	$("ol.sub-nav").slideToggle('fast'); 
   $(this).css('background-color','rgba(123, 123, 123, 0.2)')  
});

$("ol.sub-nav, #main_nav").mouseleave(function(){
	$("ol.sub-nav").slideUp('fast');
   $('#regiter_btn').css('background-color','transparent') 
});

$("#company_register, #employee_register").click(function(){
	$("ol.sub-nav").slideUp('fast');
});



