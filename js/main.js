 AOS.init({
        duration:1500,
        offset:300,
});

$(function(){

  $('#menuButton').click(function(){
    
    $(this).toggleClass('active');
    $('#nav').toggleClass('active');
  });

});

