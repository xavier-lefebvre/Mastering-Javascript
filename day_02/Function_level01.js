// 1. Déclarez une fonction fullName qui affiche votre nom complet.
console.log('<==========< 1 >==========>');

function fullName() {
    console.log("Hello. I'm Igor Bogdanov.");
}
fullName();

// 2. Déclarez une fonction newFullName qui prend firstName, lastName comme paramètre et elle renvoie votre nom complet.
console.log('<==========< 2 >==========>');

function newFullName(name, surname) {
    console.log("Hello. I'm " + name + " " + surname + " .");
}
newFullName("Igor", "Bogdanov");

// 3. Déclarez une fonction addNumbers qui prend deux deux paramètres et elle renvoie return la somme.
console.log('<==========< 3 >==========>');

function addNumbers(n1, n2) {
    let sum = n1 + n2;
    console.log('La somme de ' + n1 + ' + ' + n2 + ' est égale à ' + sum);
}
addNumbers(153, 2);

// 4. Une aire d'un rectangle est calculée comme suit: area = longueur x largeur. Ecrivez une fonction qui calcule areaOfRectangle.
console.log('<==========< 4 >==========>');

function areaOfRectangle(length, width) {
    let area = length * width;
    console.log("L'aire de votre rectangle est " + area + " cm.");
}
areaOfRectangle(14, 8);
 
// 5. Le périmètre d'un rectangle est calculé comme suit: perimeter = 2x (longueur + largeur). Ecrivez une fonction qui calcule perimeterOfRectangle.
console.log('<==========< 5 >==========>');

function perimeterOfRectangle(length, width) {
    let perimeter = 2 * (length + width);
    console.log("Le périmétre de votre rectangle est de " + perimeter + " cm.");
}
perimeterOfRectangle(14, 8);

// 6. L'aire d'un cercle est calculée comme suit: area = π x r x r. Ecrire une fonction qui calcule areaOfCircle
console.log('<==========< 6 >==========>');
function areaOfCircle(r) {
    let area = r * r * Math.PI;
    console.log('Aire du cercle = ' + area + ' mm.');
}
areaOfCircle(8);
