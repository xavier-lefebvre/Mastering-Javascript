// 5) Créez un fichier datatypes.js et utilisez l'opérateur typeof pour vérifier différents types de données. Vérifiez le type de données de chaque variable
console.log(typeof 'stuff');
console.log(typeof true);
console.log(typeof myStuff);
console.log(typeof null);

let myString = 'string';
let myBoolean = true;
let myUndefined;
let myNull = null;

console.log('==============');

console.log(typeof myString);
console.log(typeof myBoolean);
console.log(typeof myUndefined);
console.log(typeof myNull);

console.log('==============');

// 6) Déclarez quatre variables sans affecter de valeurs
let myNono1;
let myNono2;
let myNono3;
let myNono4;

// 7) Déclarez quatre variables avec des valeurs affectées
let myYesyes1 = 3.7;
let myYesyes2 = 'Bah oui !';
let myYesyes3 = 37;
let myYesyes4 = function() {
    console.log(57*myYesyes1);
}

// 8) Déclarez des variables pour stocker votre prénom, nom, état matrimonial, pays et âge sur plusieurs lignes

const name = 'Patrick';
const surname = 'Le Greco';
let situation = 'Married';
const country = 'Malte';
let age = 12;

// 9) Déclarez des variables pour stocker votre prénom, nom, état matrimonial, pays et âge sur une seule ligne
let nameLine, surnameLine, situationLine, countryLine, ageLine;

// 10) Déclarez deux variables myAge et yourAge et initialisez ces deux variables et utilisez la console du navigateur.

let myAge = 30;
let yourAge = 50;

console.log('J\'ai ' + myAge + ' ans.' );
console.log('Vous avez ' + yourAge + ' ans.');

