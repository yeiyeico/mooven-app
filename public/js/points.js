// coordinates for each point , paint the route with googlemaps api
$('#point_a, #point_b').blur(function(event){

  $.getJSON( "/points/coordinates.json", {address: event.target.value}, function(search_point){
   point_address   = search_point['address'];
   point_latitude  = search_point['latitude'];
   point_longitude = search_point['longitude'];
   initialize(point_latitude, point_longitude);
   calcRoute();
});
  event.preventDefault();
});

// paint points in the body

// function showPoints(currentpoint){
//   var point = 
//   "<li>" + "Address:" + currentpoint['address'] + "<br>" + "Name:" + currentpoint['name'] + "<br>" 
//   + "logitude:" + currentpoint['longitude'] + "<br>" + "latitude:" +currentpoint['latitude'] + "<br>" 
//   + "<a class='delete_btn' href='#' data-id='"+ currentpoint['id'] + "'>"+ "delete" + "</a>" + "</li>";

//   $(point).appendTo("body");
// }

// getJSON for all the created points 

$.getJSON( "/points.json", function(data){
  for(i = 0; i < data.length; i++){
    var current_point = data[i]; 
    showPoints(current_point);
  }
});

// Save a point in database with postJSON

function savePointForm(event){
  var form = $(this); /* this en un evento 'submit' es el form */
  var data = form.serialize();
  var url  = '/points.json';  
  $.post(url, data).done(function(response){
    showPoints(response);
}).fail( function(error){
    console.log(error);
});
event.preventDefault();
};


// delete points function

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