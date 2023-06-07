
// var song1 =new Audio("song1.mp3");
// document.querySelector(".playicon").addEventListener("click", function(){
//     song1.pause();
// });
// document.querySelector(".pauseicon").addEventListener("click",function(){
//     song1.play();
// });

var mySong =document.getElementById("mySong");
    var icon =document.getElementById("icon");

   icon.onclick=function(){
      if(mySong. paused){
          mySong.play();
          icon.src="pause.png";
          
      }
      else{
          mySong.pause();
          icon.src="play.png";
      }
   }