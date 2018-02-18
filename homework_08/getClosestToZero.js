function getClosestToZero () {
    var min = Infinity;
    for (var i = 0; i < arguments.length; i++) {
	var curNum = Math.abs(arguments[i]);
        if (curNum < min) {
            min = curNum;
        }
    }
    return min;
}