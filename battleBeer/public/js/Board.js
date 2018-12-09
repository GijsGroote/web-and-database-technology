
class Board {
    constructor(numberOfRows, numberOfColumns) {
        this.grid = createGrid(numberOfRows, numberOfColumns);
        this.numberOfRows = numberOfRows;
        this.NumberOfColumns = numberOfColumns;
        // TODO: other parameters of the board?
    }
    toString() {
        return "hello I am a baord my name is ?";
    }

    getGrid() {
        return this.grid;
    }

    getNumberOfRows() {
        return this.numberOfRows;
    }

    getNumberOfColumns() {
        return this.NumberOfColumns;
    }
}

function createGrid(numberOfRows, numberOfColumns) {
    var rows = [];
    var squareID = 0;
    // loop through the rows
    for (var i = 0; i < numberOfRows ; i++) {
        var row = [];
        // loop through the columns
        for (var j = 0; j < numberOfColumns ; j++) {
            // add a new square to the row
            row.push(new Square(squareID, i, j, 50, 50));
            squareID++;
        }
        // add the row to the rows
        rows.push(row);
    }
    return rows;
}