
var secondHand = document.getElementsByClassName("secondHand")[0];
var minuteHand = document.getElementsByClassName("minuteHand")[0];
var hourHand = document.getElementsByClassName("hourHand")[0];
var moveHands = function() {
  var currentTime = new Date();
  var seconds = currentTime.getSeconds();
  var minutes = currentTime.getMinutes();
  var hours = currentTime.getHours();
  /*seconds/60 --- > percentage of seconds completed. */
  var secondsDegrees = ((seconds/60) * 360)+90;
  var minutesDegrees = ((minutes/60)*360)+90;
  var hoursDegrees = ((hours/12)*360)+90;
  console.log("Second",seconds)
    console.log("minutes",minutes)
    console.log("Hours",hours)
  secondHand.style.transform = "rotate("+secondsDegrees+"deg)";
  minuteHand.style.transform = "rotate("+minutesDegrees+"deg)";
  hourHand.style.transform ="rotate("+hoursDegrees+"deg)";
}

setInterval(moveHands,1000);
