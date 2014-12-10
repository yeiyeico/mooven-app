
$.getJSON( "/points.json", function(data){
  var list_points = [];

  for(i = 0; i < data.length; i++){
    var current_point = data[i]; 
    list_points[i] =  "<li>" + "Address:" + current_point['address'] + "<br>" 
                             + "Name:" + current_point['name'] + "<br>" 
                             + "logitude:" + current_point['longitude'] + "<br>" 
                             + "latitude:" +current_point['latitude'] +
                      "</li>" ;
  }

  // $( "<ul/>", {
  //   "class": "my-new-list",
  //   html: list_points.join( "" )
  // }).appendTo( "body" );
});

// Send the request
$.post('/points.json', data, function(response) {
    // Do something with the request
}, 'json');