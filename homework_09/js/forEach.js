function forEach(arr, customFunction) {
    for (var arg in arr) {
        customFunction(arr[arg]);
    }
}

/*
forEach([9,2,3,4], function (e1) {
    console.log(e1);
});*/