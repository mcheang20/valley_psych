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
//= require bootstrap
//= require_tree .

// alert wrapper
$(document).ready(function(){
  setTimeout(function(){
    $('.alert-wrapper').fadeOut("slow", function(){
      $(this).remove();
    })
  }, 5000);
});

// $(function() {
 //    $(".caption-one").animate({
//      opacity: '1',
//      margin: '0 0 0 20%',
//      top: '+=100'
//    }, 800, function() {}
//    );
//});

// $(document).scroll(function(){
//  if($(window).width() >= 1100){
//    var scar = $(this).scrollTop();
//    if (scar >= 0) {
//      $(".caption-one").animate({
//        opacity: '1',
//        margin: '0 0 0 20%'
//      },800);
//    }
//  } else {
//    $(".caption-one").animate({
//      opacity: '1',
//      margin: '0'
//    },400);
//  }
//});

// welcome page animations
$(document).scroll(function () {
  if($(window).width() >= 1100){
    var ban = $(this).scrollTop();
    if (ban > 200) {
      $('.intro-img img').animate({
        opacity: '1',
        margin: '0 10% 0 0'
      },800);
    }
  } else {
    $('.intro-img img').animate({
      opacity: '1',
      margin: '0'
    },900);
  }
});

$(document).ready(function(){
  $(".caption-one").addClass("animated fadeInLeft");
});

$(document).scroll(function(){
  var scr =  $(this).scrollTop();
    if (scr > 220) {
      $(".home-info").addClass("animated fadeInUp");
    }
});

//mobile menu
$(document).ready(function(){
  if($(window).width() <=550){
    $(".mobile-menu").click(function(){
      $("#navbar").slideToggle();
    })
  }
});

//mobile sidebar
$(document).ready(function(){
  if($(window).width() <=550){
    $("#sidebarBtn").click(function(){
      $("#sidebarDropdown").slideToggle();
    })
  }
});

// link highlight
$(function(){
  $('a').each(function() {
    if ($(this).prop('href') == window.location.href) {
      $(this).addClass('current-link');
    }
  });
});
