// Développez un script qui génère n'importe quel nombre de caractères aléatoire:
console.log('<==========< 1 >==========>');
// function randomChar1(n1, n2) {
//  console.log(Math.random().toString(36).substring(2, n1) + Math.random().toString(36).substring(2, n2));
// } 

// randomChar1(2, 13);


function randomChar2(length) {
  
  let str = Math.random().toString(36).substring(2, length);// generate
  for(let i = 0; i < length ; i++) {
    str += Math.random().toString(36).charAt(Math.floor(Math.random() * toString(36).length)); //charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string. 
  }
  return str;
}
console.log(randomChar2(128));

console.log('<==========< 2 >==========>');
// this function define an interval an round it.
function randomNumberBetween(min, max) {
    return Math.round(Math.random() * (max - min) + min); 
  }

function randomRGB () {
    let a = randomNumberBetween(0, 255);
    let b = randomNumberBetween(0, 255);
    let c = randomNumberBetween(0, 255);
    console.log('rgb(' + a + ',' + b + ',' + c + ')');
}
randomRGB();




