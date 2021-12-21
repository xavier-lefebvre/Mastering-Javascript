console.log('1. Déclarez une variable nommée defi et attribuez-lui une valeur initiale \'Pratiquer les algorithmes en JavaScript\'');
console.log('');
const defi = 'Pratiquer les algorithmes en JavaScript';

console.log('2) Affichez la chaîne sur la console du navigateur en utilisant console.log()');
console.log('');
console.log('===> ' + defi);
console.log('');


console.log('');
console.log('3. Affichez le length de la chaîne sur la console du navigateur en utilisant console.log()');
console.log('');
console.log('==> ' + 'La longueur de la chaîne ' + defi + ' est égale à ' + defi.length);
console.log('');

console.log('');
console.log('4. Remplacez tous les caractères de chaîne en majuscules en utilisant la méthode toUpperCase()')
console.log('');
console.log('==> ' + defi.toUpperCase());
console.log('');

console.log('');
console.log('5. Remplacez tous les caractères de chaîne en minuscules en utilisant la méthode toLowerCase()')
console.log('');
console.log('==> ' + defi.toLowerCase());
console.log('');

console.log('');
console.log('6. Découpez (slice) le premier mot de la chaîne en utilisant la méthode substr() ou bien substring()');
console.log('');
console.log('==> ' + defi.substring(9).slice());
console.log('');

console.log('');
console.log('7. Découpez la phrase Jours en JavaScript from 10 jours en JavaScript.');
console.log('');
console.log('==> ' + '10 Jours en Javascript'.slice(3, 8));
console.log('');

console.log('');
console.log('8. Vérifiez si la chaîne contient un mot Script en utilisant la méthode includes()');
console.log('');
console.log('==> ' + '10 Jours en JavaScript'.includes('Script'));
console.log('');

console.log('');
console.log('9. Divisez la chaine string dans un array en utilisant la méthode split()');
console.log('');
let myString = '';
console.log(myString.split());
console.log('');

console.log('');
console.log('10. Divisez la chaine "10 Jours en JavaScript" à l\'espace en utilisant la méthode split()');
console.log('');
console.log('10 Jours en JavaScript'.split());
console.log('');

console.log('');
console.log("11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' " + 'split divisez la chaîne à la virgule et changez-la en tableau.');
console.log('');
console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(', '));
console.log('');

console.log('');
console.log('12. Changez 10 Jours en JavaScript à 10 Jours en PHP en utilisant la méthode replace() .');
console.log('===> ' + '10 Jours en JavaScript'.replace('JavaScript', 'PHP'));
console.log('');


console.log('');
console.log('13. Qu\'est-ce que le caractère à l\'index 15 dans la chaine "10 Jours en JavaScript"? Utilisez la méthode charAt().');
console.log('==> ' + '10 Jours en JavaScript'.charAt(15));
console.log('');

console.log('');
console.log('14. Quel est le code de caractère de J dans la chaine \'10 Jours en JavaScript\' en utilisant charCodeAt()');
console.log('10 Jours en JavaScript'.charAt(3) + ' ==> ' + '10 Jours en JavaScript'.charCodeAt(3));
console.log('');

console.log('');
console.log('15. Utilisez indexOf pour déterminer la position de la première occurrence de a dans 10 Jours en JavaScript');
console.log('10 Jours en JavaScript'.charAt(13) + ' ==> ' + '10 Jours en JavaScript'.indexOf('a'));
console.log('');

console.log('');
console.log('16. Utilisez lastIndexOf pour déterminer la position de la dernière occurrence de a dans 10 Jours en JavaScript.');
console.log('10 Jours en JavaScript'.charAt(15) + ' ==> ' + '10 Jours en JavaScript'.lastIndexOf('a'));
console.log('');

console.log('');
console.log('17. Utilisez indexOf pour trouver la position de la première occurrence du mot \'parce que\' dans la phrase suivante:');
console.log('\'Vous ne pouvez pas terminer une phrase avec \'parce que\' parce que c\'est une conjonction\'');
console.log('Vous ne pouvez pas terminer une phrase avec parce que parce que c\'est une conjonction'.indexOf('parce que'));
console.log('');

console.log('');
console.log('18. Utilisez lastIndexOf pour trouver la position de la dernière occurrence du mot \'parce\' que dans la phrase suivante:');
console.log('\'Vous ne pouvez pas terminer une phrase avec \'parce que\' parce que c\'est une conjonction\'');
console.log('Vous ne pouvez pas terminer une phrase avec parce que parce que c\'est une conjonction'.lastIndexOf('parce que'));
console.log('');

console.log('');
console.log('19. Utilisez search pour trouver la position de la première occurrence du mot \'parce que\' dans la phrase suivante:')
console.log('Vous ne pouvez pas terminer une phrase avec \'parce que\' parce que c\'est une conjonction');
console.log('Vous ne pouvez pas terminer une phrase avec parce que parce que c\'est une conjonction'.search('parce que'));
console.log('');

console.log('');
console.log('20. Utilisez la méthode trim() pour supprimer tout espace blanc de fin au début et à la fin d\'une chaîne. \' 10 Jours en JavaScript \'.');
console.log(' 10 Jours en JavaScript '.trim());
console.log('');

console.log('');
console.log('21. Utilisez la méthode startsWith() dans la chaine 10 Jours en JavaScript et rendre le résultat vrai');
console.log('10 Jours en JavaScript'.startsWith('10'));
console.log('');

console.log('');
console.log('22. Utilisez la méthode endsWith() dans la chaine 10 Jours en JavaScript et rendre le résultat vrai');
console.log('10 Jours en JavaScript'.endsWith('t'));
console.log('');

console.log('');
console.log('23. Utilisez la méthode match() pour trouver tous les a dans "10 Jours en JavaScript"');
let regex1 = /a/g;
console.log('10 Jours en JavaScript'.match(regex1));
console.log('');

console.log('');
console.log('24. Utilisez la méthode concat() et fusionner \'10 Jours en\' avec \'JavaScript\' en une seule chaîne, \'10 Jours en JavaScript\'');
console.log('10 Jours en'.concat(' ', 'JavaScript'));
console.log('');

console.log('');
console.log('25. Utilisez la méthode repeat() pour afficher "10 Jours en JavaScript" 2 fois ');
console.log('10 Jours en JavaScript. '.repeat(2));
console.log('');

console.log('');
console.log('');
console.log();
console.log('');





