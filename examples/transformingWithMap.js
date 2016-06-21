function map(array, transform) {
  var mapped;
  for (i = 0; i < array.length; i++)
    mapped.push(transform(array[i]));
  return mapped;
}
