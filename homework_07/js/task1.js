function validate(n) {
    if (!n) {
        console.log("Incorrect data. n should be a number");
        return false;
    }

    if (n < 0 || n > 20) {
        console.log("Incorrect data. n should be more then 0 and less or equals to 20 ");
        return false;
    }
    if (n % 1 !== 0) {
        console.log("Incorrect data. n should be natural");
        return false;
    }

    return true;
}

var n = Number(prompt("Please enter 0<n<=20: ", "0"));
console.log("For data: " + n);
if (validate(n)) {
    var i = Number(0);
    while (i <= n) {
        var space = "   ";
        var block = "[~]";
        var spaceCount = 0;
        var blockCount = 0;
        var resString = "";
        while (spaceCount < n - i) {
            resString += space;
            spaceCount++
        }
        while (blockCount < i * 2 - 1) {
            resString += block;
            blockCount++;
        }
        resString += "\n";
        i++;
        console.log(resString)
    }
}