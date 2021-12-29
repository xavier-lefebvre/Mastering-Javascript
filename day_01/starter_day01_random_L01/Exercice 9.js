
function dayPermonth(month) {
        if (month === 'janvier' || month === 'mars' || month === 'mai' || month === 'juillet' || month === 'août' || month === 'octobre' || month === 'décembre') {
                return month + ' est un mois comportant 31 jours';
        } else if (month === 'février') {
                return month + ' est un mois comportant 28 jours';
        } else {
                return month + ' est un mois comportant 30 jours';
        }
}
console.log(dayPermonth('mars'));
console.log(dayPermonth('février'));
console.log(dayPermonth('juin'));

