var gem1;
var gem2;
var gem3;
var gem4;
var gemArr = [];
var targetNum;
var playerNum;
var wins;
var losses;
var x;



function startGame(){
    genGemNums();
    genTargetNum();
    console.log (targetNum);
    console.log (gemArr)

}

function genTargetNum(){
   targetNum = (Math.floor(Math.random()*101)) + 19;
}

function genGemNums() {
    let x = 0;
    while (4 > gemArr.length){
        x = (Math.floor(Math.random()*11)) + 1;
        if (gemArr.includes(x) === false){
            gemArr.push(x)
        }
    }
}