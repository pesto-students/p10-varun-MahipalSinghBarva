function reconstructQueue(persons) {
    // sort the persons array by descending height, and if height is same, then by ascending m
    persons.sort((a, b) => {
       if (a[0] === b[0]) {
          return a[1] - b[1];
       } else {
          return b[0] - a[0];
       }
    });
     
    let result = [];
    // insert persons into the result array according to their m value
    for (let i = 0; i < persons.length; i++) {
       result.splice(persons[i][1], 0, persons[i]);
    }
     
    return result;
 }
 const persons = [[7,0],[4,4],[5,0],[6,1],[5,2]]
   
 
 const result = reconstructQueue(persons);
 console.log(result);