function reduce(array, combine, start) {
  var current = start;
  for(i=0; i<array.length; i++) {
    current = combine(current, array[i]);
  }
  return current;
}
