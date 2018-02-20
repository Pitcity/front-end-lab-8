function getTransformedArray(arr, customFunction) {
    var outputArray = [];
    forEach(arr, function (value) {
        outputArray.push(customFunction(value));
    });
    console.log("[" + outputArray.join() + "]");
    return outputArray;
}

/*
getTransformedArray([1, 2, 3, 4], function (num) {
    return num * num;
});*/