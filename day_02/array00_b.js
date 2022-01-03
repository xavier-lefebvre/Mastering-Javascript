//La suite de l'exercice array
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
let itCompanies2 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
let itCompanies3 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
let itCompanies4 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

console.log('==========< 19 >==========');
console.log(itCompanies.splice(2,3));
// let middleCompanies = itCompanies.slice(2,3); it's remove the middle of itCompanies array [2, 3, 4] and add it to middleCompanies variables.

console.log('==========< 20 >==========');
console.log(itCompanies.shift()); // The shift() method removes the first array element and "shifts" all other elements to a lower index.

console.log('==========< 21 >==========');
console.log(itCompanies2.splice(2,3)); /* The first parameter (0) defines the position where new elements should be added (spliced in).
                                        The second parameter (1) defines how many elements should be removed.
                                        The rest of the parameters are omitted. No new elements will be added.
                                        */

console.log('==========< 22 >==========');  
console.log(itCompanies3.pop()); //The pop() method removes the last element from an array:

console.log('==========< 23 >==========');  
itCompanies4.splice(0,7);
console.log(itCompanies4);