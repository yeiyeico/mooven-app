var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

var point_lat = 4.598056000000001;
var point_lng = -74.075833;

function initialize(point_lat, point_lng) { 
  
  directionsDisplay = new google.maps.DirectionsRenderer();
  var myCenter = new google.maps.LatLng(point_lat,point_lng);

  var mapOptions = {
    center: new google.maps.LatLng(point_lat, point_lng),
    zoom: 9,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var marker = new google.maps.Marker({
      position: new google.maps.LatLng(point_lat, point_lng),
  });


  
  var map = new google.maps.Map(document.getElementById("container-map"),mapOptions);
  directionsDisplay.setMap(map);
  marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize(point_lat, point_lng));


function calcRoute() {
  var start = document.getElementById("point_a").value;
  var end   = document.getElementById("point_b").value;
  var request = {
    origin      :start,
    destination :end,
    travelMode  : google.maps.TravelMode.DRIVING
  };
  directionsService.route(request, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(result);
    }
  });
}