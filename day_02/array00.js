// 1. déclarer un tableau vide
let tab1 = [];

// 2. déclarer un tableau avec 5 éléments
let tabFive = ['1', 1, true, ' ', 'chocolat'];



// 3. Trouver la longueur de votre tableau
console.log('==========< 3 >==========');
console.log(tabFive.length);


// 4. Obtenez le premier élément, l'élément du milieu et le dernier élément du tableau.
console.log('==========< 4 >==========');
console.log(tabFive[0]);
console.log(tabFive[2]);
console.log(tabFive[4]);


// 5. Déclarez un tableau appelé mixedDataTypes, placez différents types de données dans le tableau et recherchez la longueur du tableau.
// La taille du tableau doit être supérieure à 5
console.log('==========< 5 >==========');
let mixedDataTypes = ['1', 1, true, ' ', 'chocolat', 'trois', 20,7];
console.log(mixedDataTypes.length);


// 6. Déclarez un tableau nommé itCompanies et attribuez les valeurs initiales: Facebook, Google, Microsoft, Apple, IBM, Oracle et Amazon
console.log('==========< 6 >==========');
let itCompanies =  ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];



// 7. Affichez le tableau avec console.log()
console.log(itCompanies);


// 8. Affichez le nombre des entreprises dans le tableau.
console.log('==========< 8 >==========');
console.log('Ce tableau contient ' + parseInt(itCompanies.length) + ' entreprises.');


// 9. Affichez la première entreprise, la moyenne et la dernière entreprise.
console.log('==========< 9 >==========');
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length/2)]);
console.log(itCompanies[itCompanies.length - 1]);

// 10. Affichez chaque entreprise.
console.log('==========< 10 >==========');
function displayCompanies () {
for (let n = 0; n < itCompanies.length; n++) {
    console.log(itCompanies[n]);
}
}
displayCompanies();

// 11. Changez le nom de chaque entreprise en majuscules un par un et affichez-les
console.log('==========< 11 >==========');
function upperCompanies () {
for (let n = 0; n < itCompanies.length; n++) {
    console.log(itCompanies[n].toUpperCase());
}
}
upperCompanies();

// 12. Affichez le tableau sous forme de phrase: Facebook, Google, Microsoft, Apple, IBM, Oracle et Amazon sont de grandes entreprises d'IT.
console.log('==========< 12 >==========');
function stringCompanies () {
    let lastCompanies = itCompanies.pop(); // pop() remove the last element of an index and return it.
    console.log(itCompanies.join(", ") + " et " + lastCompanies + " sont de grandes entreprises d'IT.");
}
stringCompanies();

// 13. Vérifiez si une certaine entreprise existe dans le tableau itCompanies.
// S'il existe, retournez l'entreprise sinon retournez une société introuvable.
console.log('==========< 13 >==========');
function checkCompanies (company) {
    let test = itCompanies.includes(company); // The includes() method returns true if an array contains a specified value.
    if (test === true) {
        console.log(company + ' existe dans le tableau itCompanies.');
    } else {
        console.log('Société introuvable');
    }
}
checkCompanies('Google');
checkCompanies('Sony');

// 14. (Facultatif) Filtrez les entreprises qui ont plus d'un 'o' sans utiliser la méthode filter

//15. Trier le tableau en utilisant la méthode sort()
console.log('==========< 15 >==========');
console.log(itCompanies.sort());

//16. Inversez le tableau en utilisant la méthode reverse()
console.log('==========< 16 >==========');
console.log(itCompanies.reverse());

//17. Découpez les 3 premières entreprises du tableau
console.log('==========< 17 >==========');
console.log(itCompanies.splice(3,3));

//18. Découpez les 3 dernières entreprises du tableau
console.log('==========< 18 >==========');
console.log(itCompanies.splice(0,3));

//19. Séparez (the middle) entreprise d'IT ou des entreprises à partir du tableau.





