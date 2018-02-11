function validate(side1, side2) {
    if (Math.min(side1, side2) <= 0) {
        console.log("Incorrect data. Ammount cannot be < 0");
        return false;
    } else {
        return true;
    }
}

const dollarToUan = Number(27.1240);
const euroToUan = Number(33.2324);
var euroAmmount = Number(prompt("Please enter EURO: ", "0"));
var dollarAmmount = Number(prompt("Please enter DOLLAR: ", "0"));
console.log("For data: " + euroAmmount + ", " + dollarAmmount);
if (validate(euroAmmount, dollarAmmount)) {
	var euroInUan = euroToUan * euroAmmount;
	var dollarInUan = dollarToUan * dollarAmmount;
	var euroToDollar = euroToUan / dollarToUan;
    console.log(euroAmmount + " euros are equal " + euroInUan + " UAH, "
        + dollarAmmount + " dollars are equal " + dollarInUan + " UAH, one euro is equal " + euroToDollar + " dollars");
}
