
// empty function to test poorly
$("#bla").click( function() {


})

// TODO: create server side code which allows the check of domain name. than finish this funciton
window.addEventListener('message', function(event) { 

    // IMPORTANT: Check the origin of the data! 
    if (~event.origin.indexOf('http://yoursite.com')) { 
        // The data has been sent from your site 

        // The data sent with postMessage is stored in event.data 
        console.log(event.data); 
    } else { 
        // The data hasn't been sent from your site! 
        // Be careful! Do not use it. 
        return; 
    } 
}); 