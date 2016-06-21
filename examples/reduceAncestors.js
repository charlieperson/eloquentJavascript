function reduceAncestors(person, f, defaultValue) {
  function valueFor(person) {
    if(person == null)
      return defaultValue;
    else
      console.log(person.mother);
      return f(person, valueFor(byName[person.mother]),
                       valueFor(byName[person.father]));
  }
  return valueFor(person);
}

function sharedDNA(person, fromMother, fromFather) {
  if (person.name == 'Pauwels van Haverbeke')
    return 1;
  else
    return (fromMother + fromFather) / 2;
}
