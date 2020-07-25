var pattern  = [];
var usrPattern = []; 
var  buttons = new Array("red", "blue", "green","yellow");
function nextSequence(){
    var randNum = Math.floor(Math.random()*(4)); 
    var randColor = buttons[nextSequence()];
    pattern.push(randColor);
    $("#" + "randColor").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound();

  }
  $(".btn").click(function(){

  var userColor = (this.id);
  usrPattern.push(userColor);
  playSound(userColor);
  })
  function playSound(color){
    var aud = new Audio("sounds/" + color + ".mp3" );
    aud.play();
  }
  










