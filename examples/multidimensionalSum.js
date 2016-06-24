function multiDimensionalSum(array) {
    var sum = 0;
    for(var i = 0; i<array.length; i++) {
        if(Array.isArray(array[i])) {
            sum += multiDimensionalSum(array[i]);
        } else {
            sum += array[i];
        }
    }
    return sum;
}
