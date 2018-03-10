

var random_result;
var lost = 0;
var win = 0;
var previous = 0;

//
//

var resetAndStart = function () {

    $(".crystals").empty();

         var immages = [
                    'http://img4.wikia.nocookie.net/__cb20110529221932/finalfantasy2/de/images/4/49/Kristall1.png',
                    'https://i.pinimg.com/originals/d0/3d/57/d03d5726e6969ea10452d4274d1db15b.jpg',
                    'https://s-media-cache-ak0.pinimg.com/474x/66/94/ce/6694ce6eadbbede14e60f3efbf303dfa.jpg',
                    'https://i.pinimg.com/474x/9d/d6/00/9dd600561e92f0a299e3683bc8af05d7--purple-quartz-purple-haze.jpg',];


    random_result = Math.floor(Math.random() * 101 ) + 19;


    $("#result").html('Random Result: ' + random_result);

    for(var i = 0; i <4; i++){


        var random = Math.floor(Math.random() * 11) + 1;


        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random
            });


           




$(".crystals").append(crystal);
    }

    $("#previous").html("Total Score: " + previous);
}

resetAndStart();



//Event Delegation
$(document).on('click', ".crystal", function () {


    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Total Score: " + previous);

    console.log(previous);

    if (previous > random_result){

        lost--;

        $("#lost").html("Total Lost: " + lost);

        previous = 0;

        resetAndStart();

    }

    else if(previous === random_result){
        win++;

        $("#win").html("Total Wins: " +  win);



        previous = 0;

        resetAndStart();
    }

});



/*There will be four crystals displayed as buttons on the page.

    The player will be shown a random number at the start of the game.

    When the player clicks on a crystal, it will add a specific amount of points to the player's total score.

Your game will hide this amount until the player clicks a crystal.
    When they do click one, update the player's score counter.
umber.
The player wins if their total score matches the random number from the beginning of the game.

    The player loses if their score goes above the random n

    The game restarts whenever the player wins or loses.

    When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

 Option 1 Game design notes

The random number shown at the start of the game should be between 19 - 120.

Each crystal should have a random hidden value between 1 - 12.*/

