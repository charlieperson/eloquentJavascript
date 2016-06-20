function countBs(string){
  var bs = 0;
  for(i=0; i<string.length; i++) {
    if(string.charAt(i) == 'B') bs += 1;
  }
  return bs;
}
