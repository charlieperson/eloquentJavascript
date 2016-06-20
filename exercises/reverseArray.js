function reverseArray(array){
  var solution = [];
  for(i=0; i<array.length;i++){
    solution.push(array[(array.length-1)-i]);
  }
  return solution;
}
