// contains all the functions which determine which state is next and what happens in every state


// create the global variable state
var state;

// When the document refreshes, the state is set to 0
// The first iframe should ask for names
$(document).ready(function () {
    state = 0;

    // line below not usefull because the iframe is set to enterNameScreen by default
    // document.getElementById("iFrame").src = "../iFrameScreen/enterNamesScreen.html";
});


/*
TODO: Add more functionality to this changeState Function

If the file becomes to long, create a function and call that function, I dont want this changeState 
function to become to long. Let's keep it readible and mainible 
*/
function changeState() {

    switch (state) {
        // user clicked next after enterNameScreen
        case 0:
            // check if the user has put in some credentials
            // yes? go to the placeBeerScreen
            // no? create popup:"you want to continue without username"

            // set the state to 1
            state = 1;
            // for now just continue to the placeBeerScreen for player 1
            document.getElementById("iFrame").src = "./iFrameScreen/placeBeerP1Screen.html";
            break;
        case 1:
            // check if all the beers are placed corectly
            // no? show a popup with error message explaining what is wrong
            // yes? go to the placeBeerP2Screen and let player 2 place his beers

            state = 2;
            // for now just continue to the placeBeerScreen for player 2
            document.getElementById("iFrame").src = "./iFrameScreen/placeBeerP2Screen.html";

            break;
        case 2:
          

            break;
        default:
        //  an error occured, this state is not know, display error iframe
    }
}


// next is clicked the state should change if the checks pass
$("#next").click(function () {
    changeState();
})


// TODO: the state should be passed to the Iframe every time it changes
//              Also the iframe should be able to change the state 
// sent the state to the iframe 
var frame = document.getElementById('iFrame'); 

// frame.contentWindow.postMessage(state, '*'); 