// 1 Écrivez un code qui peut donner des notes aux élèves en fonction de leurs scores:
/*
    80-100, A
    70-89, B
    60-69, C
    50-59, D
    0-49, F
*/
function notation(score) {
    if (score >= 80) {
        return 'A';
    } else if (score >= 70) {
        return 'B';
    } else if (score >= 60) {
        return 'C';
    } else if (score >= 50) {
        return 'D';
    } else if (score >= 0) {
        return 'F';
    }
}

console.log(notation(71));
console.log(notation(99));
console.log(notation(7));
console.log(notation(51));

//2 Vérifiez si la saison est l'automne, l'hiver, le printemps ou l'été. Si l'entrée utilisateur est: - Septembre, octobre ou novembre, la saison est l'automne. 
/*- Décembre, janvier ou février, la saison est l'hiver.
- Mars, avril ou mai, la saison est le printemps 
- Juin, juillet ou août, la saison est l'été */

function whatSeason(season) {
    if (season === 'septembre' || season === 'octobre' || season === 'novembre') {
        return 'C\est l\'automne';
    } else if (season == 'décembre' || season === 'janvier' || season === 'février') {
        return 'C\est l\'hiver';
    } else if (season == 'mars' || season === 'avril' || season === 'mai') {
        return 'C\est le printemps';
    } else {
        return 'C\est l\'été';
    }

}
console.log(whatSeason('mars'));
console.log(whatSeason('septembre'));
console.log(whatSeason('décembre'));
console.log(whatSeason('juillet'));