function filter(array, test) {
  var passed = [];
  for (i=0; i < array.length; i++) {
    if(test(array[i]))
      passed.push(array[i]);
  }
  return passed;
}
