$(document).ready(function() {
	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	   })
	   .mouseleave(function(){
	   	$('.ryu-ready').hide();
	   	$('.ryu-still').show();
	   })
	   .mousedown(function(){
	   	console.log('mousedown');
	   	playHadouken();
	   	$('.ryu-ready').hide();
	   	$('.ryu-throwing').show();
	   	$('.hadouken').show().finish().animate(
	   		{'left':'1024px'},
	   		500,
	   		function(){
	   			$('.hadouken').hide();
	   			$('.hadouken').css('left','450px');
	   		});
	   	//show hadooken
	   })
	   .mouseup(function(){
	   	console.log('mouseup');
	   	//back to ready
	   	$('.ryu-throwing').hide();
	   	$('.ryu-ready').show();
	   });
	   
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
};

$(document).keydown(function(e){
	     if(e.keyCode == 88){
	   	console.log('keydown');
	   	$('.ryu-ready').hide();
	   	$('.ryu-cool').show();
	   }
	   })
		.keyup(function(){
         console.log('keyup');
	   	$('.ryu-cool').hide();
	   	$('.ryu-ready').show();
		});
	   