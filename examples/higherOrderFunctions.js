function greaterThan(n) {
  return function(m) { return m > n; };
}

function noisy(f) {
  return function(arg) {
    console.log("calling with", arg);
    var val = f(arg);
    console.log('called with', arg, '- got', val);
    return val;
  };
}
