
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
});

$("ol.sub-nav, #main_nav").mouseleave(function(){
	$("ol.sub-nav").slideUp('fast');
});

$("#company_register, #employee_register").click(function(){
	$("ol.sub-nav").slideUp('fast');
});



