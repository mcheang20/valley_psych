// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap
//= require_tree .

// welcome page animations
   $(document).scroll(function(){
      var scar = $(this).scrollTop();
      if (scar > 1) {
       $(".caption-one").animate({
           opacity: '1',
           margin: '0 0 0 20%'
       },800);
     }
   });

  $(document).scroll(function () {
     var ban = $(this).scrollTop();
     if (ban > 200) {
       $('.intro-img img').animate({
         opacity: '1',
         margin: '0 18% 0 0'
       },800);
     }
  });
