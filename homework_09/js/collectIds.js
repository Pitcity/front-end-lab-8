function collectIds(array) {
    getTransformedArray(
        getFilteredArray(array, function (object) {
            return object.rating > 3.0;
        }), function (object) {
            return object.id;
        })
};