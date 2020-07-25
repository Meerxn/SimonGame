var pattern  = [];
var usrPattern = []; 
var started = false;
var level = 0;

var  buttons = new Array("red", "blue", "green","yellow");

$(document).on("keypress click touch",function(){
 if (started === false){
    
    started = true;
    $("#level-title").text("Level " + level);
    nextSequence();
   
 
      
    }
    })


 
  $(".btn").click(function(){
 
    var userColor = (this.id);
    animatePress(userColor);
    usrPattern.push(userColor);
    console.log(usrPattern.length);
    checkAns(usrPattern.length - 1);
    playSound(userColor);
    })
  
 
function nextSequence(){
    usrPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randNum = Math.floor(Math.random()*(4)); 
    var randColor = buttons[randNum];
    pattern.push(randColor);
    $("#" + randColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randColor);
    

  }
  function checkAns (lvl){
    
    if ( pattern[lvl] ===  usrPattern [lvl]) {

        
  
        if (usrPattern.length ===  pattern.length){
  
        
          setTimeout(function () {
            nextSequence();
          }, 1000);
  
        }
  
      } else {
  
      wrong();
      restart();
  
      }
  
  }


  function playSound(color){
    var aud = new Audio("sounds/" + color + ".mp3" );
    aud.play();
  }

  function animatePress(currColor){
    $("#" + currColor).addClass("pressed"); 
    setTimeout(function(){  $("#" + currColor).removeClass("pressed");   }, 100);
  }
  function wrong(){
     var audio = new Audio ("sounds/wrong.mp3");
     audio.play();
    $("body").addClass("game-over"); 
    setTimeout(function(){  $("body").removeClass("game-over");}  , 200);
    $("#level-title").text("Game over press any key to restart");

  }
  function restart(){
      level = 0 ; 
      pattern = [];

      started = false;
  }
  
  


  














