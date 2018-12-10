// web socket code on the server
module.exports = function (wss) {
       
    // create a webSocket
    wss.on("connection", function(ws) {
    console.log("Connection state: " + ws.readyState);
    ws.send("thanks for the message, - Server");
    ws.close();
    console.log("Connection state again: " + ws.readyState);

    ws.on("message", function incoming(message) {
        console.log("[LOG] " + message);
    })
});
 

console.log("small test yo");
// do web socket shit

}