console.log('1. Utilisez console.log() et afficher la déclaration suivante:');
console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.');
console.log('');


console.log('2. Utilisez console.log() et afficher la citation suivante:');
console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."');
console.log('');

console.log('3. Vérifiez si typeof \'10\' est exactement égal à 10. Sinon, rendez-le exactement égal.');

let ten = '10';
if (typeof ten != 10) {
    ten = parseInt(ten);
} 

console.log(ten);


console.log('');


console.log('4. Vérifiez si parseFloat(\'9.8\') est exactement égal à 10 if not make it exactly equal with 10.');

let myFloat = parseFloat('9.8');
if (myFloat != 10) {
    myFloat = Math.round(myFloat);
} 

console.log(myFloat);


console.log('');
console.log('');


console.log('5. Vérifiez si \'on\' is found in both \'python\' and \'jargon\'');

let bothMatch = ['python', 'jargon'];
let regex1 = /on/g;
console.log(bothMatch[0].match('on'));
console.log(bothMatch[1].match('on'));


console.log('');
console.log('');


console.log('6. I hope this course is not full of jargon. Vérifiez si \'jargon\' est dans la chaine.');
console.log('I hope this course is not full of jargon.'.match('jargon'));


console.log('');
console.log('');

console.log('6. Générer un nombre aléatoire entre 0 et 100 inclusivement.');
console.log(Math.random() * (100 - 0) + 0 );


console.log('');
console.log('');


console.log('7. Générer un nombre aléatoire entre 50 et 100 inclusivement.');
console.log(Math.random() * (100 - 50) + 50 );


console.log('');
console.log('');


console.log('8. Générer un nombre aléatoire compris entre 0 et 255 inclusivement.');
console.log(Math.floor(Math.random() * 255));

console.log('');
console.log('');


console.log('10. Utilisez substr pour slicer la phrase because because because de la phrase suivante: \'You cannot end a sentence with because because because is a conjunction\'');
let because = 'You cannot end a sentence with because \'because\' because is a conjunction';
console.log(because.indexOf('because'));
console.log(because.lastIndexOf('because'));
because = because.substring(31, 38).slice();
console.log(because);
console.log('');





