import { countries} from './modules/country.js';
import { webTechs } from './modules/web_tech.js';

console.log('<==========< 1 >==========>');
console.log(countries);
console.log(webTechs);

console.log('<==========< 2 >==========>');
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, VueJs, Laravel.';

let regex1 = /[.,]/g; // regex for select punctutation.
let textNope = text.replace(regex1, ''); //replace method : replace regex1 with empty string;
console.log(textNope);

let textToArray = textNope.split(' '); // split method transform a string to an array;
console.log(textToArray);
console.log(textToArray.length);

console.log('<==========< 3 >==========>');
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

shoppingCart.unshift('Meat'); // The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements
console.log(shoppingCart);

shoppingCart.push('Sugar'); // The push() method adds a new element to an array (at the end)
console.log(shoppingCart);

shoppingCart.splice(4, 1); // use splice() to remove elements without leaving "holes" in the array
console.log(shoppingCart);

shoppingCart.splice(3, 1, 'Green tea'); // The splice() method adds new elements to an array, and returns an array with the deleted elements (if any):
console.log(shoppingCart);


// Dans le tableau 'countries', vérifiez si 'Morocco existe dans le tableau s'il existe, affichez 'MOROCCO'. S'il n'existe pas, ajoutez à la liste des pays.
console.log('<==========< 4 >==========>');
console.log(countries.includes('Morocco'));
if (countries.includes('Morocco') === true) {
    console.log('MOROCCO'); 
} else {
    countries.push('Morocco')
}

// Dans le tableau 'webTechs', vérifiez si 'Sass' existe dans le tableau et s'il existe,
//affichez «Sass est un préprocesseur CSS». S'il n'existe pas, ajoutez Sass au tableau et affichez-le.
console.log('<==========< 5 >==========>');
if(webTechs.includes('Sass')) {
    console.log('Sass est un préprocesseur CSS');
} else {
    webTechs.push('Sass');
    console.log(webTechs);
}

// Concaténez les deux variables suivantes et stockez-les dans une variable fullStack.
console.log('<==========< 6 >==========>');
const frontEnd = ['HTML', 'CSS', 'JS', 'VueJs', 'VueX']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd); // concat() method for merge two or more arrays.

console.log(fullStack)

console.log('<==========< 6 >==========>');
