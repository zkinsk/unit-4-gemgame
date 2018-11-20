// Variables
var gemArr = [];
var targetNum = 'test';
var playerNum = 0;
var wins = 0;
var losses = 0;
var x;
var gI;

// Funtions!

// start the game from HTML call
function startGame(){
    clickOn();
    result();
    playerNum = 0;
    genGemNums();
    genTargetNum();
    console.log (targetNum);
    console.log (gemArr);
    $("#targetNum").html ("<h2>" + targetNum + "</h2>"); // update target number
    $("#scoreTally").html (playerNum); // update target number
    $("#wins").html (wins); // updates wins
    $("#losses").html (losses); // updates wins
}

// click action
function clickOn(){
    $(".gems").on("click", function() {
        gI = gemArr[($(this).attr("crystalValue"))];
        // alert ("click! " + gI)
        playerNum = playerNum + gI;
        $("#scoreTally").html (playerNum);
        checkNum();
        $(this).fadeTo(100, .75).fadeTo(100, 1.0);
    });
}
// checks to see if you match or go over - delays then re-starts the game
function checkNum (){
    if (playerNum > targetNum){
        $(".gems").off('click');
        losses++;
        result(1);
        setTimeout(function(){ startGame() }, 2000);
    }
    else if (playerNum === targetNum){
        $(".gems").off('click');
        wins++; 
        result(2);
        setTimeout(function(){ startGame() }, 2000);  
    }
}
// sets target number
function genTargetNum(){
   targetNum = (Math.floor(Math.random()*101)) + 19;
}

// generates gem values with no repeat and no 0
function genGemNums() {
    gemArr=[];
    let x = 0;
    while (4 > gemArr.length){
        x = (Math.floor(Math.random()*11)) + 1;
        if (gemArr.includes(x) === false){
            gemArr.push(x)
        }
    }
}
// Displays a result in the score box which is later cleared on restart
function result(k){
    if (k === 2) {
        $("#result").html("You Win!");
        $("#result").css({"color": "green"});
    }
    else if (k === 1){
        $("#result").html("You Lose!");
        $("#result").css({"color": "red"});
    }
    else {
        $("#result").html("")
    }
}