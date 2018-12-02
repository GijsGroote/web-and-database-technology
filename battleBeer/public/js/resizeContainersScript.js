
// script makes sure the main container is in the middle

// when the page is done loading, resize the containers
$(document).ready(resizeContainers)

// when the viewport is changed, resize the containers
$(window).resize(resizeContainers)

// function to set the width of the left and right container
// only resizes containers if there is space
function resizeContainers() {
    
    // viewport width and width of the middle container
    var screenWidth = window.innerWidth;
    var containerMiddleWidth = document.getElementById("containerMiddle").offsetWidth
    
    // check if the middle container is not larger than the viewport
    if (containerMiddleWidth >= screenWidth) {
        document.getElementById('containerLeft').setAttribute("style", "width:0px;");
        // let the right container be 0
        // document.getElementById('containerRight').setAttribute("style", "width:0px");
    }
    else {
        // calculate the space which can be added left and right containers
        var sidesWidth = (screenWidth - containerMiddleWidth) / 2;
        
        // set the width of the left and right container
        document.getElementById('containerLeft').setAttribute("style", "width:" + sidesWidth + "px;");
        
        // if the line below is 'activated' the float will go below and the page becomes scrolleble on certain viewport dimensions
        // document.getElementById('containerRight').setAttribute("style", "width:" + sidesWidth + "px");
    }
}



