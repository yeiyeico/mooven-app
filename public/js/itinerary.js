
function showItinerary(currentItinerary){
  var point = 
  "<li>" + "Name:" + currentItinerary['itinerary_name'] + "<br>" + "Seats:" + currentItinerary['avaliable_seats'] + "<br>" 
  + "start point:" + currentItinerary['start_point'] + "<br>" + "end point:" + currentItinerary['end_point']['longitude'] + "<br>" 
  + "<a class='deleteitinerary_btn' href='#' data-id='"+ currentItinerary['id'] + "'>"+ "delete" + "</a>" + "</li>";

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
  var data = {point_a: document.getElementById('point_a').value,
            point_b: document.getElementById('point_b').value,
            itinerary_name: document.getElementById('itinerary_name').value,
            seats: document.getElementById('seats').value
            };
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

$(document).on('click','.deleteitinerary_btn', function(event){
  $.ajax({
    type: "POST",
    url: "/itineraries/"+ event.target.dataset.id,
    dataType: "json",
    data: {
      "_method":"delete"
  },
  success: function(){
   event.target.parentElement.remove();
}
});
  event.preventDefault();
});



