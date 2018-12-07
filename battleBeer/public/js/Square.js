/**
 * Square on the grid
 * 
 * id the square number
 * height and width are the dimensions of the square in pixels
 * beverage is the beverage on the square, if the beverage is null there is no drink on this square
 * boolean shot indicates if the square is shot(true), or the square is not shot(false)
 */
class Square {
    constructor(id, rowNumber, columnNumber, height, width) {
        this.id = id;
        this.rowNumber = rowNumber;
        this.columnNumber = columnNumber;
        this.height = height;
        this.width = width;
        this.beverage = null;
        this.shot = false; 
    }
    toString() {
        return this.name + " points: " + this.points + " description: " + this.description + "\n";
    }
}

// setters
function setBeverage(beverage) {
    // TODO: security? is beverage actually a beverage
    this.beverage = beverage;
}

function setShot(shot) {
    // TODO: security is shot actually a boolean
    this.shot = shot;
}

// getters
function getID() {
    return this.id;
}

function getRowNumber() {
    return this.rowNumber;
}

function getColumnNumber() {
    return this.columnNumber;
}

function getHeight() {
    return this.height;
}

function getWidth() {
    return this.width;
}

function getBeverage() {
    return this.beverage;
}

function getShot() {
    return this.shot;
}

