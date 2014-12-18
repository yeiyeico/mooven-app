
function showItinerary(currentItinerary){
	view = new View('#itinerary-template');
	var point = view.render(currentItinerary);
	$('#content-list-routes ol').append(point);

}

$.getJSON( "/itineraries.json", function(data){
	for(i = 0; i < data.length; i++){
		var currentItinerary = data[i]; 
		showItinerary(currentItinerary);
	}
});

function saveItinerary(event){
	var url  = '/itineraries.json';
	var form = $(this);
	var data = {point_a 			: document.getElementById('point_a').value,
					point_b 			: document.getElementById('point_b').value,
					itinerary_name : document.getElementById('itinerary_name').value,
					seats 			: document.getElementById('seats').value
					}

	$.post(url, data).done(function(response){
		showItinerary(response);
			document.getElementById('point_a').value = "";
			document.getElementById('point_b').value = "";
			document.getElementById('itinerary_name').value - "";
			document.getElementById('seats').value = "";
			window.initialize(point_lat, point_lng);
			modal.open( {content: $("<p class='txt-modal'>You create a new route! if you want to see all your routes click in 'view all may routes'</p>")}, "http://localhost:3000/userpanel#list" );
		}).fail(function(error){
			console.log(error);
	});
	event.preventDefault();
}

$("#create-route-from").submit(saveItinerary);


$(document).on('click','.deleteitinerary_btn', function(event){
	$.ajax({
		type: "POST",
		url: "/itineraries/" + event.target.dataset.id,
		dataType: "json",
		data: { "_method":"delete" },
		success: function(){
			event.target.parentElement.remove();
		}
	});
	event.preventDefault();
});

var View = function(templateName){
  // change the interpolation symbol to avoid conflict with erb(rails)
  _.templateSettings = {
  	interpolate : /\{\{(.+?)\}\}/g
  };

	this.templateElement = $(templateName);
	this.compiled        = _.template(this.templateElement.html());
  this.render = function(data){
  	return this.compiled(data);
  }
}





