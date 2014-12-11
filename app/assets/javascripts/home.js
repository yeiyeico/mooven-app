
var list_points = [];


$.getJSON( "/points.json", function(data){
  for(i = 0; i < data.length; i++){
    var current_point = data[i]; 
    showPoints(current_point);
  }
});

function showPoints(currentpoint){
  list_points.push(
     "<li>" + "Address:" + currentpoint['address'] + "<br>" + "Name:" + currentpoint['name'] + "<br>" 
     + "logitude:" + currentpoint['longitude'] + "<br>" + "latitude:" +currentpoint['latitude'] + "</li>");

    $( "<ul/>", {"class": "new_point", html: list_points.join("")}).appendTo("body");
}

function savePointForm(){
  event.preventDefault();
    var form = $(this); /* this en un evento 'submit' es el form */
    var data = form.serialize();
    var url = 'http://localhost:3000/points.json';  
    $.post(url, data).done(function(response){
      showPoints(response);
    }).fail( function(){
       
    });
};

$('#new_point').submit(savePointForm);

