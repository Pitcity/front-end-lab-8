function isPrime(num) {
    var i;
    for (i = 2; i < num / 2; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}