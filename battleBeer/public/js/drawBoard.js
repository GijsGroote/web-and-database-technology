
// global variable board
var board = new Board(10, 10);

// Draw the board after refresh page
$(document).ready(function () {
    updateTable();
});

// update the entire table
// result only viseble on webpage if there was a change in the global variable board
function updateTable() {
       
    // create a new table
    var table = document.createElement("TABLE");
    table.setAttribute("id", "grid")

    // append all the squares to the table
    for (let i = 0, rowSize = board.getNumberOfRows(); i < rowSize; i++) {
        // create table row
        var tableRow = document.createElement("TR");
        
        // loop though every row
        for (let j = 0, columnSize = board.getNumberOfColumns(); j < columnSize; j++) {
            
            // the square on which the table data depends
            var tempSquare = board.getGrid()[i][j];
            
            // create a table data cell
            var tableData = document.createElement("TD");
            
            // temp, this could be deleted
            tableData.innerHTML = board.getGrid()[i][j].getID();

            // all the squares belong to the square class
            tableData.setAttribute("class", "square");

            
            //  to see the beverage uncomment below!
            // board.getGrid()[0][0].setBeverage("beer");
            // board.getGrid()[1][3].setBeverage("wine");
            // board.getGrid()[3][9].setBeverage("shot");
            // board.getGrid()[4][8].setBeverage(null);
            // board.getGrid()[2][5].setShot(true); 

            // check if the squares are, filled with booze or bombed
            if (board.getGrid()[i][j].getShot()) {
                tableData.setAttribute("class", "bombed");
            }
            
            if (board.getGrid()[i][j].getBeverage() == "beer") {
                tableData.setAttribute("class", "beerSquare");
            }
            else if (board.getGrid()[i][j].getBeverage() == "wine") {
                tableData.setAttribute("class", "wineSquare");
            }
            else if (board.getGrid()[i][j].getBeverage() == "shot") {
                tableData.setAttribute("class", "shotSquare");
            }
                      
            tableRow.appendChild(tableData);
        }
        
        // append table row to the table
        table.appendChild(tableRow);
    }
    
    $("#boardTarget").empty();
    $("#boardTarget").append(table);
}


// TODO: create server side code which allows the check of domain name. than finish this funciton
window.addEventListener('message', function (event) {

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