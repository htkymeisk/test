$(function(){
  $('.movies-btn').click(function(){
    var id =$(this).attr('href');
    var position = $(id).offset().top;
    $('body,html').animate({
      scrollTop:position
    },500);
  });
  $('.top-btn').click(function(){
    var id =$(this).attr('href');
    var position = $(id).offset().top;
    $('body,html').animate({
      scrollTop:position
    },500);
  });
  $('.about-btn').click(function(){
    var id =$(this).attr('href');
    var position = $(id).offset().top;
    $('body,html').animate({
      scrollTop:position
    },500);
  });
  $('.vocaloids-btn').click(function(){
    var id =$(this).attr('href');
    var position = $(id).offset().top;
    $('body,html').animate({
      scrollTop:position
    },500);
  });
  $('.albums-btn').click(function(){
    var id =$(this).attr('href');
    var position = $(id).offset().top;
    $('body,html').animate({
      scrollTop:position
    },500);
  });
  $('.question-btn').click(function(){
    var id =$(this).attr('href');
    var position = $(id).offset().top;
    $('body,html').animate({
      scrollTop:position
    },500);
  });
});