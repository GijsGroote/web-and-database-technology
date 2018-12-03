document.getElementById("button").onclick = function(){
    
    
    console.log("is the fucntion called?")
    // check if the form input is correct

    // not empty go to state 2

    // one of the 2 player names field empty? go to namecheck page state 1
   


    changeState("placeBeerP1");

}



function changeState(state) {

    // check if this state does actually exist

    // i think there should be more checks 'vo security

    console.log("changestate called + state " + state)

  //  $("#iFrame").attr("src", "../iFrameScreen/" + state + "Screen.html");


  document.getElementById("iFrame").src = "http://www.weer.nl/";


}