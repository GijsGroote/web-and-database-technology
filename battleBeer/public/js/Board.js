
class Board {
    constructor(NumberOfRows, NumberOfColumns) {
        this.grid = createGrid(numberOfRows, NumberOfColumns);
        this.numberOfRows = numberOfRows;
        this.NumberOfColumns = NumberOfColumns;
        // TODO: other parameters of the board?
    }
}

function createGrid(rows, columns) {
    var rows = [];
    var squareID = 0;
    // loop through the rows
    for (var i = 0 ; i < rows ; i++ ) {
        var row = [];
        // loop through the columns
        for (var j = 0 ; j < columns ; j++ ) {
            // add a new square to the row
            row += new Square(squareID, i, j, 50, 50);
            squareID++;
        }
        // add the row to the rows
        rows += row;
    }
    return rows;
}


function getGrid() {
    return this.grid;
}

function getNumberOfRows() {
    return this.numberOfRows;
}

function getNumberOfColumns() {
    return this.NumberOfColumns;
}