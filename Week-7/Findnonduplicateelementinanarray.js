const array = [5,2,3,2,5]

unique = array.filter((v, i) => array.indexOf(v) === array.lastIndexOf(v));

console.log(unique)