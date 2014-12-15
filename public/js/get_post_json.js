
function showPoints(currentpoint){
  var point = 
     "<li> <input type='hidden' value='"+ currentpoint['id'] + "'>" + "Address:" + currentpoint['address'] + "<br>" + "Name:" + currentpoint['name'] + "<br>" 
     + "logitude:" + currentpoint['longitude'] + "<br>" + "latitude:" +currentpoint['latitude'] + "<br>" 
     + "<a class='delete_btn' href='#' data-id='"+ currentpoint['id'] + "'>"+ "delete" + "</a>" + "</li>";

    $(point).appendTo("body");
}

$.getJSON( "/points.json", function(data){
  for(i = 0; i < data.length; i++){
    var current_point = data[i]; 
    showPoints(current_point);
  }
});

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


$(document).on('click','.delete_btn', function(event){
  $.ajax({
         type: "POST",
         url: "http://localhost:3000/points/"+ event.target.dataset.id,
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

$('#point_address').blur(function(){
    $.getJSON( "/points/coordinates.json", function(search_point){
      point_address= search_point['address'];
     console.log('point_address');
    }
    event.preventDefault();
});





