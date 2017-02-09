// background opacity- can be animated - start and stop duration
//background opacity
//move background images to CSS- create a class for each BG image-
//2. update JQuery to use the animate method on hover that will change the background opacity from 0 to 1


$('#linkedin').hover(function(){
    $('body').attr('class', 'first_button_bg_hover');
    $('body').css(['color', 'black']);
}, function() {
  $('body').attr('class', 'button_bg');
  });

$('#git').hover(function() {
    $('body').attr('class', 'second_button_bg_hover');
}, function() {
    $('body').attr('class', 'button_bg');
});

$('#email').hover(function() {
    $('body').attr('class', 'third_button_bg_hover');
    $('h1').attr('class', 'main_text_hover');
}, function() {
    $('body').attr('class', 'button_bg');
    $('h1').attr('class', '#myname');
});

$('#tel').hover(function() {
    $('body').attr('class', 'button_bg');
}, function() {
    $('body').attr('class', 'button_bg');
});
