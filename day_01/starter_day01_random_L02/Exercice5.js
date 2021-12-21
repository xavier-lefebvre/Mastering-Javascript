// 1 Declarez et initialisez les deux variables myAge et yourAge.
console.log('==========1==========');

let myAge = 250;
let yourAge = 25;

console.log(myAge);
console.log(yourAge);

// 2 En utilisant 'prompt', obtenez l'année de naissance de l'utilisateur
/* et si l'utilisateur a 18 ans ou plus, autorisez l'utilisateur à conduire sinon dites à l'utilisateur
 d'attendre un certain nombre d'années.*/
console.log('==========2==========');


 function rightToDrive() {
let birthYear = prompt('Entrez votre date de naissance');
let actualAge = 2021 - birthYear; 

 if (actualAge >= 18) {
     alert('Vous avez le droit de conduire.');
 } else {
     alert('Attendez encore quelques années pour avoir le droit de conduire.')
 }
}
console.log('ouvrir le fichier index.html pour cet exercice.');

// 3 Écrivez un script qui invite l'utilisateur à entrer le nombre d'années.
//Calculez le nombre de secondes qu'une personne peut vivre. Supposons que quelqu'un ne vive que cent ans.
console.log('==========3==========');

function restOfYourLife() {
    let ActualAge = prompt('Quel âge avez-vous ?');
    let deathAge = 100;
    let rest = deathAge - ActualAge;
    let restSecond = ((((rest * 365) * 24) * 60) * 60);
    alert('Encore ' + rest + ' années de vie, soit ' + restSecond + ' secondes.'); 
}
console.log('ouvrir le fichier index.html pour cet exercice.');

// 4 Créez un format d'heure lisible par l'homme à l'aide de l'objet Date time
/*
    YYYY-MM-DD HH:mm
    DD-MM-YYYY HH:mm
    DD/MM/YYYY HH:mm
*/

console.log('==========4==========');
let thisDate = new Date;
let thisDateUsa = thisDate.getUTCFullYear() + '-' + thisDate.getUTCMonth() + '-' + thisDate.getUTCDate() + ' ' +  thisDate.getUTCHours() + ':' + thisDate.getUTCMinutes();
let thisDateEuro = thisDate.getUTCDate() + '-' + thisDate.getUTCMonth() + '-' + thisDate.getUTCFullYear() + ' ' +  thisDate.getUTCHours() + ':' + thisDate.getUTCMinutes();
let thisDateEuroSlash = thisDate.getUTCDate() + '/' + thisDate.getUTCMonth() + '/' + thisDate.getUTCFullYear() + ' ' +  thisDate.getUTCHours() + ':' + thisDate.getUTCMinutes();

console.log(thisDateUsa);
console.log(thisDateEuro);
console.log(thisDateEuroSlash);