​​function genericPoemMaker(name, gender){
    console.log(name + " is finer than fine wine.");
    console.log("Altruistic and noble for the modern time.");
    console.log("Always admirably adorned with the latest style.");
    console.log("A " + gender + " of unfortunate tragedies who still manages a perpetual smile");
}


function getUserInput(firstName, lastName, gender, callback){
  var fullName = firstName + ' ' + lastName;
  if(typeof callback == 'function'){
    callback(fullName, gender);
  }
}
