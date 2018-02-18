function isSmaller (firstVal, secondVal) {
    return !(firstVal === secondVal || isBigger(firstVal, secondVal));
}