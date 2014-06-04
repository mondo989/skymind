

// Randomizer
var randomNumGen = Math.floor((Math.random() * 10) + 1);

    if ( randomNumGen <= 5) {
        document.getElementById("cats").style.display = "none";
    } else {
        document.getElementById("writings").style.display = "none";
    }




//The . click to annon function 

$( "#whole-uploader" ).on( "click", function (){
         $(".refresh").show("slow");
         $(".col-sm-6 > .blankdiv").show("slow");
         $(".dowork").show("slow");
});
      
