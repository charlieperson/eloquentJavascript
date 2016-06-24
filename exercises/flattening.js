var arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(array) {
  array.reduce(function(a, b){
    a = a.concat(b);
  });
  return a;
}
