// Digital clock

function time() {

  // variables declaration
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();

  //After 12 hours AM changes to PM 
  if (hours > 12) {
    hours = hours - 12;
    document.getElementById("meridian").innerHTML = "PM";
  }
  // To add a zero before hours when it has single digit
  if (hours < 10) {
    hours = "0" + hours;
  }
  // To add a zero before minutes when it has single digit
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  // To add a zero before seconds when it has single digit
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // To display the present time
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;
}

//To refresh the time every one second (1000 milliseconds)
window.setInterval("time()", 1000);