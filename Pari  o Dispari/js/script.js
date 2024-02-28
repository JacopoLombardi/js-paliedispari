

const userPariDispari = 'pari'   //prompt('scrivere "pari" oppure "dispari"');

const userNumber = 2   //prompt('inserisci un numero da 1 a 5');


const pcNumber = randomNumber(1, 6);


console.log(pcNumber);




///////  FUNCTIONS  //////////

function randomNumber(min, max){
   return Math.floor(Math.random() * (max - min) + min);
}



