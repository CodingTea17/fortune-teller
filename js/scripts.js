// BACKEND LOGIC
var nextCounter = 0;
var q1Counter = 0;
var q2Counter = 0;
var q3Counter = 0;
var q4Counter = 0;
var q5Counter = 0;
var luck = ""
var answerCounter = function(){
  $("input:checkbox[name=question1]:checked").each(function(){
    q1Counter += 1;
  });
  $("input:checkbox[name=question2]:checked").each(function(){
    q2Counter += 1;
  });
  $("input:checkbox[name=question3]:checked").each(function(){
    q3Counter += 1;
  });
  $("input:checkbox[name=question4]:checked").each(function(){
    q4Counter += 1;
  });
  $("input:checkbox[name=question5]:checked").each(function(){
    q5Counter += 1;
  });
};

// FRONTEND LOGIC
$(document).ready(function() {
  $("form#questions").submit(function() {
    event.preventDefault();
    nextCounter += 1;
    if(nextCounter === 5){
      // SUBMIT CODE GOES HERE
      $("#q5").hide();
      $("#next-btn").hide();
      $("#fortune-card").show();

      // Calls and runs the backend function for adding up the counter vals
      answerCounter();


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
      $("#next-btn").text("Get Yo Fortune");
    }
          var totalcounter = (q1Counter+q2Counter+q3Counter+q4Counter+q5Counter);
            if (totalcounter %2 === 0) {var luck = "Good"} else {var luck = "Bad"};
          $("#user-fortune").text(luck+ " Luck!"  );
  });

});

// var totalcounter = (q1Counter+q2Counter+q3Counter+q4Counter+q5Counter)
//
// var storytelling = function(){
//   var story = (totalcounter%10);
//   var fortOption1;
//   if (story % 2 === 0) {
//     fortOption1 = "good";
//   }
//   else {
//     fortOption1 = "bad";
//   }
// }

//
//
// if (fortOption1 >=
// if (totalcounter % 2 === 0) {

// } else {$("#user-fortune").text("This is odd!");
// }
