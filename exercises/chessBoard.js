var chessBoard = function(size) {
  for(i=1; i<=size; i++) {
    i % 2 === 0 ? console.log(' #'.repeat(size/2)) : console.log('# '.repeat(size/2));
  }
};
