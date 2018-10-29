window.onload = function() {

    var wins = 0;
    var losses = 0;
    var totalScore = "";
    var randomNumber = ""
    
    function start() {

        totalScore = 0;
        randomNumber = Math.floor(Math.random() * 120) + 19;
        var blueValue = Math.floor(Math.random() * 12) + 1;
        var greenValue = Math.floor(Math.random() * 12) + 1;
        var purpleValue = Math.floor(Math.random() * 12) + 1;
        var yellowValue = Math.floor(Math.random() * 12) + 1;

        $(".random-number").text(randomNumber);
        $("#wins").text(wins);
        $("#losses").text(losses);
        $(".total-score").text(totalScore);

        $("#blue-gem").attr("data-crystalvalue", blueValue);
        $("#green-gem").attr("data-crystalvalue", greenValue);
        $("#purple-gem").attr("data-crystalvalue", purpleValue);
        $("#yellow-gem").attr("data-crystalvalue", yellowValue);

    }

//-----Functions in action below ----------------------------------------------------------------------//

start();

$(".crystal-img").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    totalScore += crystalValue;
    $(".total-score").text(totalScore);

    if (totalScore === randomNumber) {
        wins++;
        alert("You win!");
        start();    
    }
    else if (totalScore >= randomNumber) {
        losses++;
        alert("You lose!");
        start();       
    }
})


}