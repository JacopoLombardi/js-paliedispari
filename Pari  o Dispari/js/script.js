

const userPariDispari = 'pari'   //prompt('scrivere "pari" oppure "dispari"');

const userNumber = 2   //prompt('inserisci un numero da 1 a 5');



// invoco la funzione randomNumber
const pcNumber = randomNumber(1, 6);
console.log(pcNumber);


// somma del numero User e numero Pc
const totale = userNumber + pcNumber;


// invoco la funzione che stabilisce se il totale è Pari o Dispari
const result = totalePariDispari(totale);
console.log('result', result);







/////////  FUNCTIONS  //////////

// funzione randomNumber
function randomNumber(min, max){
   return Math.floor(Math.random() * (max - min) + min);
}

// funzione per stabilire se la somma è Pari o Dispari
function totalePariDispari(numTot){ 
   if((numTot % 2) === 0){
      return 'pariii';
   }
   else{
      return 'dispariii';
   }
}