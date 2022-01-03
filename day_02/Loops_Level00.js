// 1. Itérer de 0 à 10 en utilisant la boucle for, while et do while
console.log('<==========< 1 >==========>');

for (let n = 0; n <= 10; n++) {
    console.log(n);
}

console.log('<---------->')
let i1 = 0;
while (i1 < 10) {
    i1++;
    console.log(i1);
}


console.log('<---------->')
let a = 0;
do {
    a++;
    console.log(a);
} while (a < 10);

// 2. Itérer de 10 à 0 en utilisant la boucle for, while et do while
console.log('<==========< 2 >==========>');

for (let n2 = 10; n2 >= 0; n2--) {
    console.log(n2);
}

console.log('<---------->')
let i2 = 10;
while (i2 >= 0) {
    console.log(i2);
    i2--;

}

console.log('<---------->')
let a2 = 10;
do {
    console.log(a2);
    a2--;

} while (a2 >= 0);

// 3. Itérer 0 à n en utilisant la boucle for

console.log('<==========< 3 >==========>');
function zeroToN(n) {
    for (let zero = 0; zero <= n; zero++) {
        console.log(zero);
    }
}
zeroToN(25);

console.log('<==========< 4 >==========>');
let sharp = '#';
let a7 = 0;
do {
    console.log(sharp)
    sharp += '#';
    a7++;
} while (a7 <= 7);

// 5.Utilisez une boucle pour affichez le modèle suivant à l'aide de console.log():

console.log('<==========< 5 >==========>');
let multi = 0;
while (multi <= 10) {
    console.log(multi + ' X ' + multi + ' = ' + multi * multi);
    multi++;
}

// 6. Utilisez la boucle for pour parcourir de 0 à 100 et n'afficher que des nombres pairs

console.log('<==========< 6 >==========>');
let toEven = 0;
for (let hundred = 100; toEven <= hundred; toEven++) {
    if (toEven % 2 == 0) {
        console.log(toEven);
    }
}



// 7. Utilisez la boucle for pour parcourir de 0 à 100 et n'afficher que les nombres impairs
console.log('<==========< 7 >==========>');
let toOdd = 0;
for (let hundred = 100; toOdd <= hundred; toOdd++) {
    if (toOdd % 2 != 0) {
        console.log(toOdd);
    }
}

// 8. Utilisez la boucle for pour parcourir de 0 à 100 et n'afficher que les nombres premiers
console.log('<==========< 8 >==========>');

const lowerNumber = 0;
const higherNumber = 100;

// for loop : lower to higher number ( in this case 0 to 100)
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    // looping through 2 (which is the first prime number) to 100.
    for (let j = 2; j < i; j++) {
        if (i % j == 0) { // 
            flag = 1;
            break; 
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}

// 9. Utilisez la boucle for pour parcourir de 0 à 100 et afficher la somme de tous les nombres.
console.log('<==========< 9 >==========>');
let sum = 0; 
for(let h = 0; h <= 100; h++ ) {
    console.log(sum = sum + h);
}

