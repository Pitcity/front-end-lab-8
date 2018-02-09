function validate(side1, side2, side3) {
    if (Math.min(side1, side2, side3) <= 0) {
        console.log("Incorrect data. Sides cannot be <= 0");
        return false;
    }

    if ((side1 <= (side2 + side3)) && (side2 <= (side1 + side3)) && (side3 <= (side1 + side2))) {
        return true;
    }
    console.log("side1: " + side1 + " sum = " + (side2 + side3) + " res: " + (side1 <= (side2 + side3)));
    console.log("side2: " + side2 + " sum = " + (side1 + side3) + " res: " + (side2 <= (side1 + side3)));
    console.log("side3: " + side3 + " sum = " + (side1 + side2) + " res: " + (side3 <= (side1 + side2)));
    console.log("Incorrect data. Is not a triangle. ");
    return false;
}

var side1 = Number(prompt("Please enter 1st side of the triangle: ", "0"));
var side2 = Number(prompt("Please enter 2nd side of the triangle: ", "0"));
var side3 = Number(prompt("Please enter 3rd side of the triangle: ", "0"));
console.log("For data: " + side1 + " " + side2 + " " + side3);
if (validate(side1, side2, side3)) {
    if (side1 === side2 && side2 === side3) {
        console.log("The triangle is Equilateral");
    } else if ((side1 !== side2 && side2 === side3)
        || (side2 !== side3 && side1 === side3)
        || (side3 !== side2 && side2 === side1)) {
        console.log("The triangle is Isosceles");
    } else if (side1 !== side2 && side2 !== side3 && side3 !== side1) {
        console.log("The triangle is Scalene");
    } else if ((side1 * side1 + side2 * side2 === side3 * side3)
        || (side2 * side2 + side3 * side3 === side1 * side1)
        || (side1 * side1 + side3 * side3 === side2 * side2)) {
        console.log("The triangle is Right triangle");
    }
}