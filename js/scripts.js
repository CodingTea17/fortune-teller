var nextCounter = 0;

$(document).ready(function() {
  $("form#questions").submit(function() {
    event.preventDefault();
    nextCounter += 1;
    if(nextCounter === 5){
      // SUBMIT CODE GOES HERE
      $("#q5").hide();
      $("#fortune-card").show();

      $("#user-fortune").text();
      
    } else if (nextCounter === 1) {
      $("#q1").hide();
      $("#q2").show();
    } else if (nextCounter === 2) {
      $("#q2").hide();
      $("#q3").show();
    } else if (nextCounter === 3) {
      $("#q3").hide();
      $("#q4").show();
    } else if (nextCounter === 4) {
      $("#q4").hide();
      $("#q5").show();
    }
  });

});
