// Callout new div after old one... 
// $(function() {
  // $('#cats').isvisible(function() {
   //  alert("do something");
  // });
// });




  //          $('#ycon').load(function () {
               
     //           $('#up-pic').show( function() {
      //              alert('hey boo');
        //        });
     //       });




// Randomizer
var randomNumGen = Math.floor((Math.random() * 10) + 1);

    if ( randomNumGen <= 5) {
        document.getElementById("cats").style.display = "none";
    } else {
        document.getElementById("writings").style.display = "none";
    }






 var newDivAfterPicUpload = document.createElement('div');
    $('#learningbox').append(newDivAfterPicUpload);


// Function to change the content of t2
function modifyText() {
  var t2 = document.getElementById("t2");
  if (t2.firstChild.nodeValue == "three") {
    t2.firstChild.nodeValue = "two";
  } else {
    t2.firstChild.nodeValue = "three";
  }
}

// add event listener to t
var el = document.getElementById("outside");
el.addEventListener("click", modifyText, false);


