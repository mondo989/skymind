
// Randomizer
var randomNumGen = Math.floor((Math.random() * 10) + 1);

    if ( randomNumGen <= 5) {
        document.getElementById("cats").style.display = "none";
    } else {
        document.getElementById("writings").style.display = "none";
    }