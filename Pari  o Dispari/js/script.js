
// associo le variabili Js alle classi dell'HTML
const btnPlay = document.querySelector('.btn_play');
const pcNumber_out = document.querySelector('.pc_numout');
const output = document.querySelector('.output_');



// quando viene cliccato btnPlay....
btnPlay.addEventListener('click', function(){

   // leggo il valore input User di pari o dispari
   const userPariDispari = document.querySelector('.user_paridispari').value;


   // leggo il valore input User da 1 a 5
   const userNumber = parseInt(document.querySelector('.user_number').value);


   // invoco la funzione randomNumber inserendo valore 'min' e 'max'
   const pcNumber = randomNumber(1, 6);
   pcNumber_out.innerHTML = `numero di Pc: ${pcNumber}`;


   // somma del numero User e numero Pc
   const totale = userNumber + pcNumber;


   // invoco la funzione che stabilisce se il totale è Pari o Dispari
   const result = totalePariDispari(totale);


   // condizione per stabilire se User vince, altrimenti vince Pc
   if((userPariDispari === 'pari') && (result === 'pari')  ||  (userPariDispari === 'dispari') && (result === 'dispari')){
      output.innerHTML = 'Vince User!'
   }
   else{
      output.innerHTML = 'Vince Pc!'
   }

})


/////////  FUNCTIONS  //////////

// funzione randomNumber
function randomNumber(min, max){
   return Math.floor(Math.random() * (max - min) + min);
}

// funzione per stabilire se la somma è Pari o Dispari
function totalePariDispari(numTot){ 
   if((numTot % 2) === 0){
      return 'pari';
   }
   else{
      return 'dispari';
   }
}