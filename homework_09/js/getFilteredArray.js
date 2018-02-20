function getFilteredArray(arr, customFunction) {
    var outputArray = [];
    forEach(arr, function (value) {
        if (customFunction(value)) {
            outputArray.push(value);
        }
    });
    console.log("[" + outputArray.join() + "]");
    return outputArray;
}

/*
getFilteredArray([1, 2, 3, 4], function (num) {
    return num > 2;
});*/