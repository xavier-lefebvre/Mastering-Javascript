// 1) Déclarez et initialisez les variables: firstName, lastName, country, city, age, isMarried, year et utilisez 'typeof' operator pour vérifier les différents data types.

console.log('==========>1<==========');
const firstName = 'Jean-miche';
const lastName = 'Bidochon';
const country = 'France';
const city ='Lyon';
let age = '53';
let isMarried = true;
const year = 1968;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// 2 Vérifiez si le type '10' est égal à 10

console.log('==========>2<==========');
function typeOf10() { 
if (typeof '10' === typeof 10) {
    return 'It\'s the number 10';
} else {
    return 'not the number 10';
}
}
console.log(typeOf10());
// 3 Vérifiez si parseInt('9.8') est égal à 10

console.log('==========>3<==========');
function typeOfFloat() {
    if ( parseInt(9.8) != 10 ) {
        return '9.8 n\'est pas égal à 10';
    } else {
        return '9.8 est égal à 10';
    }
}
console.log(typeOfFloat());

/* 4 La valeur booléenne est vraie ou fausse.
Écrivez trois déclarations JavaScript qui fournissent une valeur de vérité (True).
Ecrivez trois instructions JavaScript qui fournissent une valeur erronée (False).*/
console.log('==========>4<==========');
let booleanTrue1 = true;
let booleanTrue2 = new Boolean([]);
let booleanTrue3 = new Boolean("false");

let booleanFalse1 = new Boolean();
let booleanFalse2 = new Boolean(false);
let booleanFalse3 = new Boolean(null);



// 5 Déterminez d'abord le résultat des expressions suivantes sans utiliser console.log(). Après avoir décidé le résultat, confirmez-le en utilisant console.log()
console.log('==========>5<==========');
/*
4 > 3 true
4 >= 3 false X
4 < 3 false
4 <= 3 false
4 == 4 true
4 === 4 true
4 != 4 false
4 !== 4 false
4 != '4' true
4 == '4' true
4 === '4' false */ 
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 == '4');
console.log(4 === '4');


// 6 Déterminez d'abord le résultat des expressions suivantes sans utiliser console.log(). Après avoir décidé le résultat, confirmez-le en utilisant console.log()
console.log('==========>6<==========');

/*
4 > 3 && 10 < 12 true
4 > 3 && 10 > 12 false
4 > 3 || 10 < 12 true
4 > 3 || 10 > 12 false X
!(4 > 3) true X
!(4 < 3) false X
!(false) true
!(4 > 3 && 10 < 12) false
!(4 > 3 && 10 > 12) true
!(4 === '4') false X
There is no 'on' in both dragon and python false
*/

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
console.log('end ' + !('dragon'.match('on') == 'on' && 'python'.match('on') === 'on'));

// 7. Utilisez l'objet Date pour effectuer les activités suivantes :
/*
Quelle est l'année aujourd'hui?
Quel est le mois aujourd'hui en nombre?
Quelle est la date aujourd'hui?
Quel est le jour aujourd'hui en nombre?
Quelles sont les heures maintenant?
Quel est le procès-verbal maintenant?
Découvrez le nombre de secondes écoulées entre le 1er janvier 1970 et aujourd'hui.
*/
console.log('==========>7<==========');
let thisDate = new Date; 
console.log(thisDate.getUTCFullYear());
console.log(thisDate.getUTCMonth());
console.log(thisDate);
console.log(thisDate.getUTCDate());
console.log(thisDate.getUTCDay());
console.log(thisDate.getHours())
console.log(thisDate.getTime())







