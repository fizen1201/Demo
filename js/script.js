document.addEventListener('contextmenu', event => event.preventDefault());

$(".one").click(function(){
    $(".hidden1").slideToggle(300);
  });
  
$(".two").click(function(){
    $(".hidden2").slideToggle(300);
  });
  
$(".three").click(function(){
    $(".hidden3").slideToggle(300);
  });

