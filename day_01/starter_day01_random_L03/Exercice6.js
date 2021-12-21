/*Créez un format d'heure lisible par l'homme à l'aide de l'objet Date time.
L'heure et la minute doivent être toujours à deux chiffres (7 heures devraient être 07 et 5 minutes devraient être 05)
YYY-MM-DD HH:mm eg. 20120-01-02 07:05
*/
let thisDate = new Date;
let thisDateUsa = thisDate.getUTCFullYear() + '-' + thisDate.getUTCMonth() + '-' + thisDate.getUTCDate() + ' ' +  thisDate.getUTCHours() + ':' + thisDate.getUTCMinutes();

console.log(thisDateUsa);