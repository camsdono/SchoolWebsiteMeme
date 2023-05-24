// Set the target date and time
var targetDate = new Date("May 25, 2023 13:30:00").getTime();
    
// Update the countdown every second
var countdownTimer = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();
  
  // Find the time remaining between now and the target date
  var timeRemaining = targetDate - now;
  
  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
  // Display the countdown timer
  document.getElementById("countdown").innerHTML = days + "D " + hours + "H " + minutes + "M " + seconds + "S ";
  
  // Check if the countdown timer has ended
  if (timeRemaining < 0) {
    clearInterval(countdownTimer);
    showMovie();
  }
}, 1000);

// Function to show the movie and enter full-screen mode
function showMovie() {
  var movie = document.getElementById("movie");
  
  // Check if the browser supports full screen
  if (movie.requestFullscreen) {
    movie.requestFullscreen();
  } else if (movie.mozRequestFullScreen) { // Firefox
    movie.mozRequestFullScreen();
  } else if (movie.webkitRequestFullscreen) { // Chrome, Safari and Opera
    movie.webkitRequestFullscreen();
  } else if (movie.msRequestFullscreen) { // IE/Edge
    movie.msRequestFullscreen();
  }
  
  // Show the movie
  movie.style.display = "block";

  movie.play()
}