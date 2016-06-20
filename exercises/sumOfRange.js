function range(start, end, interval = 1){
  var solution = [];
  if (start < end) {
    for(i=start; i<end+1; i += interval){
      solution.push(i);
    }
  } else {
    for(i=start; i>end-1; i += interval){
      solution.push(i);
    }
  }
  return solution;
}

function sum(array){
  var sum = 0;
  for(i=0; i<array.length; i++) {
    sum += array[i];
  }
  return sum;
}
