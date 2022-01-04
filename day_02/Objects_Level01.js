// 1. Créez un objet vide appelé chien
console.log('<==========< 1 >==========');

// const chien = {};

// 2. Affichez l'objet chien sur la console
console.log('<==========< 2 >==========');

// console.log(chien);

//3. Ajoutez le nom, les pattes, la couleur, l'âge et les propriétés d'écorce pour l'objet chien. La propriété bark est une méthode qui renvoie woof woof 
console.log('<==========< 3 >==========');

const chien = {
    name: 'Winston',
    paws: 4,
    color: 'light brown',
    age: 4,
    bark: function() {
        return 'woof woof';
    } 
};

// 4. Obtenez le nom, les pattes, la couleur, l'âge et la valeur de l'écorce de l'objet chien
console.log('<==========< 4 >==========');
console.log(chien.name);
console.log(chien.paws);
console.log(chien.color);
console.log(chien.age);
console.log(chien.bark());

// 5. Définissez les nouvelles propriétés de l'objet chien: race, getDogInfo

console.log('<==========< 5 >==========');
chien['race'] = 'berger allemand';
chien['getDogInfo'] = 'dog info';
console.log(chien.race);
console.log(chien.getDogInfo);
