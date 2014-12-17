window.Router = (function(module){
  
  var route = function(path){
    
  if (!path){
      path = window.location.href;
    }
  
    var i      = path.indexOf('#');
    var l      = path.length;
    var sliced = path.slice(i+1, l);
    return sliced; 
  }

  var loadCreateItinerary = function(){
    var element = $('#content-create-route');
    $('.route').hide();
    element.show();
  }

  var loadListRoutes = function(){
    var element = $('#content-list-routes');
    $('.route').hide();
    element.show();
  }

  var loadDefault = function(){
    loadCreateItinerary();
  }

  module.observeLinks = function(){
    $('.route-link').click(function(event){
      event.preventDefault();
      module.run(this.href);
      $('.route-link').removeClass('active'); 
      $(this).addClass('active');
    })
  };

  module.run = function(path){
    switch(route(path)){
      case 'create':
      loadCreateItinerary()
      break;
      case 'list':
      loadListRoutes();
      break;
      default:
      loadDefault()
      break;
    }

  }
  return module;
})(window.Router || {});