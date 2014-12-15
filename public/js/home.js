
function showItinerary(currentItinerary){
  var point = 
  "<li>" + "Name:" + currentItinerary['itinerary_name'] + "<br>" + "Seats:" + currentItinerary['avaliable_seats'] + "<br>" 
  + "start point:" + currentItinerary['start_point'] + "<br>" + "end point:" + currentItinerary['end_point'] + "<br>" 
  + "<a class='delete_btn' href='#' data-id='"+ currentItinerary['id'] + "'>"+ "delete" + "</a>" + "</li>";

  $(point).appendTo("body");
}

$.getJSON( "/itineraries.json", function(data){
  for(i = 0; i < data.length; i++){
    var currentItinerary = data[i]; 
    showItinerary(currentItinerary);
}
});

function saveItinerary(event){
  var form = $(this);
  var data = form.serialize();
  var url = '/itineraries.json';
  $.post(url, data).done(function(response){
    showItinerary(response);
    console.log(showItinerary);
}).fail( function(error){
    console.log(error);
});
event.preventDefault();
}

$("#create-route-from").submit(saveItinerary);





