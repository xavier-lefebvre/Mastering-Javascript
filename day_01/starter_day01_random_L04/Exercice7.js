// 1 Si a est supérieur à b return 'a est superieur à b' sinon 'a est inferieur à b'. Utilisez deux méthodes : if else & ternary operator
console.log('==========1==========');

function compareIfAB(a, b) {
    if ( a > b) {
        return "a est superieur à b";
    } else {
        return "a est inferieur à b";
    }
}

console.log(compareIfAB(1,3));
console.log(compareIfAB(5,4));

function compareTernaryAB (a, b) {
    return (a > b ? "a est superieur à b" : "a est inferieur à b");
}
console.log(' ');
console.log(compareTernaryAB(5, 1));
console.log(compareTernaryAB(1, 5));


// 2 Les nombres pairs sont divisibles par 2 et le reste est zéro. Comment vérifier si un nombre est pair ou n'utilise pas JavaScript?
console.log('==========2==========');

function isDivisibleBy2(number) {
    if (number % 2 == 0) {
        return number + ' est divisible par 2.'
    } else {
        return number + ' n\'est pas divible par 2';
    }
}

console.log(isDivisibleBy2(3));
console.log(isDivisibleBy2(8));