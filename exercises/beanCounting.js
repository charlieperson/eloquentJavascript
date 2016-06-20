function countChar(string, char){
  var chars = 0;
  for(i=0; i<string.length; i++) {
    if(string.charAt(i) == char) chars += 1;
  }
  return chars;
}
