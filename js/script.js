

var scores = [0,0];
var total = 0;
var activePlayer = 0;
var active = true;

$(document).ready(function(){
      document.querySelector('.player-0-panel').classList.add('active');

$("#roll").click(function() {

    if (active) {
        var randomNum = Math.floor(Math.random() * 6 + 1);
        alert(randomNum);
        if (randomNum !== 1) {
            //Add score
            total+=randomNum;
            document.getElementById('player' + activePlayer).innerHTML = total;
     } else {
     nextPlayer();
        }
    }
});
});
$(document).ready(function(){
$("#hold").click(function() {
    if (active) {
        //Add current score to global score
        scores[activePlayer] += total;

        //Update the UI
        document.getElementById('result' + activePlayer).innerHTML = scores[activePlayer];

        // Check if player won the game
        if (scores[activePlayer] >= 100) {
            document.getElementById("winner1").innerHTML = "You Won";

            active = false;

        } else {
            nextPlayer();
        }
    }
});
});


function nextPlayer() {
    if (activePlayer === 0) {
    activePlayer = 1;
    }
    else {
      activePlayer = 0;
    }

    total = 0;

    document.getElementById('player0').textContent = '0';
    document.getElementById('player1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');


}

//var x = document.querySelector('#score-0').textContent;
//console.log(x);
