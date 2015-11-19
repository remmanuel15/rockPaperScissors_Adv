var userPoint = 0;
var aiPoint = 0;

// This function returns the selection of the computer
function getAISelection() {
    //TODO: randomly choose between 'rock', 'paper', or 'scissors'
    var options=["rock","paper","scissor"];
    var number= Math.floor(Math.random() * 3 );
    return options[number];
}

// This function picks the winner
function pickWinner(userValue, aiValue) {
    //TODO: pick the correct winner: user or ai
    //TODO: Add one point for the winner
  var winner= "draw";
    if (userValue == "rock" && aiValue == "scissor" ){
       winner = "user";
  }
    if (userValue == "paper" && aiValue == "rock" ){
       winner = "user";
  }
    if (userValue == "scissor" && aiValue == "paper" ){
       winner = "user";
  }
  
    if (userValue == "rock" && aiValue == "paper" ){
       winner = "ai";
  }
    if (userValue == "paper" && aiValue == "scissor" ){
       winner = "ai";
  }
    if (userValue == "scissor" && aiValue == "rock" ){
       winner = "ai";
  }
  
    return winner;
}

// This function sets the scoreboard with the correct points
function setScore() {
$("#userPoint").text(userPoint);
$("#aiPoint").text(aiPoint);
}

// This function captures the click and picks the winner
function evaluate(evt) {
    var userValue = evt.target.getAttribute('id');
    var aiValue = getAISelection();

    var winner = pickWinner(userValue, aiValue);

    if ( 'user' === winner ) {
        $('#message').delay(50).text('You have won!, Click a box to play again');
    userPoint = userPoint + 1 } 
    else if ( winner === 'draw' ) {
        $('#message').delay(50).text('Draw! Click a box to play again');}
    else {
        $('#message').delay(50).text('You have lost!, Click a box to play again');
    aiPoint = aiPoint + 1
    }
    setScore()
}

// This function runs on page load
$(document).ready(function(){
$(".token").click(function(evt){
  evaluate(evt);

});
});
