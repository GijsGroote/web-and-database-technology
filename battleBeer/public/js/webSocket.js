// web socket code on the client

var socket = new WebSocket("localhost:3000");

socket.onmessage = function(event) {

document.getElementById("hello").innerHTML = event.data;
}

socket.onopen = function() {
    socket.send("Hello from the client");
    document.getElementById("hello").innerHTML = "just send a message to the server";

};

