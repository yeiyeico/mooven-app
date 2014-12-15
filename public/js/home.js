
// function showPoints(currentpoint){
//   var point = 
//   "<li>" + "Address:" + currentpoint['address'] + "<br>" + "Name:" + currentpoint['name'] + "<br>" 
//   + "logitude:" + currentpoint['longitude'] + "<br>" + "latitude:" +currentpoint['latitude'] + "<br>" 
//   + "<a class='delete_btn' href='#' data-id='"+ currentpoint['id'] + "'>"+ "delete" + "</a>" + "</li>";

//   $(point).appendTo("body");
// }


function showItinerary(currentItinerary){
  var point = 
  "<li>" + "Name:" + currentItinerary['itinerary_name'] + "<br>" + "Seats:" + currentItinerary['avaliable_seats'] + "<br>" 
  + "start point:" + currentItinerary['start_point'] + "<br>" + "end point:" + currentItinerary['end_point'] + "<br>" 
  + "<a class='delete_btn' href='#' data-id='"+ currentItinerary['id'] + "'>"+ "delete" + "</a>" + "</li>";

  $(point).appendTo("body");
}


// $.getJSON( "/points.json", function(data){
//   for(i = 0; i < data.length; i++){
//     var current_point = data[i]; 
//     showPoints(current_point);
//   }
// });

$.getJSON( "/itineraries.json", function(data){
  for(i = 0; i < data.length; i++){
    var currentItinerary = data[i]; 
    showItinerary(currentItinerary);
  }
});


function savePointForm(event){
  var form = $(this); /* this en un evento 'submit' es el form */
  var data = form.serialize();
  var url  = '/points.json';  
  $.post(url, data).done(function(response){
    showPoints(response);
    console.log(showPoints);
  }).fail( function(error){
    console.log(error);
  });
  event.preventDefault();
};

// $("#create-route-from").submit(savePointForm);


$(document).on('click','.delete_btn', function(event){
  $.ajax({
    type: "POST",
    url: "/points/"+ event.target.dataset.id,
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


$('#point_a, #point_b').blur(function(event){

  $.getJSON( "/points/coordinates.json", {address: event.target.value}, function(search_point){
     point_address   = search_point['address'];
     point_latitude  = search_point['latitude'];
     point_longitude = search_point['longitude'];
     // document.getElementById("point_latitude").value  = point_latitude ;
     // document.getElementById("point_longitude").value = point_longitude ;
     initialize(point_latitude, point_longitude);
     calcRoute();
     // start_point = {latitude: point_latitude, longitude: point_longitude};
     // console.log(start_point); 
 });

  event.preventDefault();
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






