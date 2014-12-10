
$.getJSON( "/points.json", function(data){
  var list_points = [];
  console.log(data);

  for(i = 0; i < data.length; i++){
    var current_point = data[i]; 
    list_points[i] =  "<li>" + "Address:" + current_point['address'] + "<br>" 
                             + "Name:" + current_point['name'] + "<br>" 
                             + "logitude:" + current_point['longitude'] + "<br>" 
                             + "latitude:" +current_point['latitude'] +
                      "</li>" ;
  }

  $( "<ul/>", {
    "class": "my-new-list",
    html: list_points.join( "" )
  }).appendTo( "body" );
});
