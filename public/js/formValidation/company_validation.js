function convertFormtoJson(form){
	var array = $(form).serializeArray();
	var json = {};

	$.each(array, function() {
		json[this.name] = this.value || '';
	});  
	return json;
}

$('#form_company').bind('submit', function(event){
	
	event.preventDefault();	
	var c_name     = document.getElementById('company_name');
	var c_address  = document.getElementById('company_address');
	var c_email    = document.getElementById('company_email');
	var c_password = document.getElementById('company_password');

	basic_fields = [c_name, c_address];

	for(i =0; i < basic_fields.length; i++){
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

		localStorage.setItem('companyForm', JSON.stringify(json));
		modal.open(	{content: $("<p class='txt-modal'>Registro Exitoso! <br> Bienvenido "+ json.name +"</p>")}, "http://localhost:3000/#login" );
	}

});

