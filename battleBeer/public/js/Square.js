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


    // toString for a human readible format
    toString() {
        return "Square ID: " + this.id + ", rowNumber: " + this.rowNumber + ", columnNumber: " + this.columnNumber + "\nWith beverage: " + this.beverage + " am I shot?: " + this.shot;
    }

    // setters
    setBeverage(beverage) {
        // TODO: security? is beverage actually a beverage
        this.beverage = beverage;
    }

    setShot(shot) {
        // TODO: security is shot actually a boolean
        this.shot = shot;
    }

    // getters
    getID() {
        return this.id;
    }

    getRowNumber() {
        return this.rowNumber;
    }

    getColumnNumber() {
        return this.columnNumber;
    }

    getHeight() {
        return this.height;
    }

    getWidth() {
        return this.width;
    }

    getBeverage() {
        return this.beverage;
    }

    getShot() {
        return this.shot;
    }
}