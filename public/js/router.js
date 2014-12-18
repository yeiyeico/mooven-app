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
    $('.descrip-user').hide();
    element.show();
  }

  var loadDefaultUserpanel = function(){
    loadCreateItinerary();
  }

  var loadHome = function(){
    var element = $('#main-home');
    $('.route').hide();
    element.show();
  };

// routes for home section registers and login

  var loadCompanyForm = function(){
    var element = $('#register_company');
    $('.route').hide();
    element.show();
  };

  var loadEmployeeForm = function(){
    var element = $('#register_employee');
    $('.route').hide();
    element.show();
  };

  var loadLogin = function(){
    var element = $('#login-home');
    $('.route').hide();
    element.show();
  };

  var loadDefaultHome = function(){
      loadHome();
  }

  module.observeLinks = function(){
    $('.route-link').click(function(event){
      event.preventDefault();
      module.runUserpanel(this.href);
      $('.route-link').removeClass('active'); 
      $(this).addClass('active');
    })
  };

  module.runUserpanel = function(path){
    switch(route(path)){
      case 'create':
        loadCreateItinerary();
      break;
      case 'list':
        loadListRoutes();
      break;
      default:
        loadDefaultUserpanel();
      break;
    }
  };
    
  module.activeSectionHome = function(){
    $('.home-route').click(function(event){
      event.preventDefault();
      module.runHome(this.href);
      $('.home-route').removeClass('active'); 
      $(this).addClass('active');
    })
  };

  module.runHome = function(path){
    switch(route(path)){
      case 'index':
        loadHome();
      break;
      case 'login':
        loadLogin();
      break;
      case 'company':
        loadCompanyForm();
      break;
      case 'employee':
        loadEmployeeForm();
      break;
      default:
        loadDefaultHome();
      break;
    }
  }

  return module;

})(window.Router || {});