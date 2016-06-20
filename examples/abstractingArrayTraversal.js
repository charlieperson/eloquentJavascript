function forEach(array, action) {
  for(i = 0; i < array.length; i++) {
    action(array[i]);
  }
}
