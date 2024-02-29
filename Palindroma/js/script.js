
// variabile collegata al .btn_check dell'HTML
const btnCheck = document.querySelector('.btn_check');
const outputResult = document.querySelector('.output_result');


// quando viene cliccato il pulsante...
btnCheck.addEventListener('click', function(){

   // leggi la parola in input
   const inputText = document.querySelector('.input_text').value;

   // invoco la funzione per invertire la parola
   const reverseInputText = reverseWord(inputText);
   console.log(reverseInputText)

   // se 'inputText' e 'reverseInputText' sono uguali...
   if(isPalindroma(inputText, reverseInputText) === 'true'){
      outputResult.innerHTML = `La parola inserita è Palindroma`;
   }
   else{
      outputResult.innerHTML = `La parola inserita NON è Palindroma`;
   }

})



//////////// FUNCTIONS ////////////////

// funzione dove inverto la parola
function reverseWord(inputWord){

   let outputWord = '';

   // leggi dal fondo lettera per lettera 'inputWord' e concatena le lettere lette in 'outputWord'
   for( let i = inputWord.length - 1; i>=0; i--){
      outputWord += inputWord[i];
   }
   return outputWord;
}


// funzione dove se, la parola Input e quella Output sono uguali restituisci 'true', altrimenti 'false'
function isPalindroma(inputWord, outputWord){

   if(inputWord === outputWord){
      return 'true';
   }
}
















// const emptyArray = [];
// const copyReverseArray = [];


// // variabile collegata al .btn_check dell'HTML
// const btnCheck = document.querySelector('.btn_check');
// const outputResult = document.querySelector('.output_result');


// // quando viene cliccato il pulsante...
// btnCheck.addEventListener('click', function(){

//    // leggi il valore dell'input
//    const inputText = document.querySelector('.input_text').value;

//    // leggo da quante lettere è formata la stringa
//    const inputTextLength = inputText.length;



//    for(let i = 0; i < inputTextLength; i++){
//       // mi permette di prendere da una stringa una lettera alla volta '.charAt()'
//       const lettera = inputText.charAt(i);

//       // inserisco una ad una le lettere nell' emptyArray
//       emptyArray.push(lettera);
//    }

//    console.log(emptyArray)



//    // variabile che conta esattamente al contrario di 'i' nel For
//    let iReverse = inputTextLength-1;

//    // copiamo emptyArray in copyReverseArray, però al contrario
//    for(let i = 0; i < inputTextLength; i++){
      
//       copyReverseArray[iReverse] = emptyArray[i];
//       iReverse--;
//    }

//    console.log(copyReverseArray)


   
//    // confronto incrociato tra due Array, uno parte dall'inizio, mentre l'altro parte dalla fine
//    for(let i = 0; i < inputTextLength; i++){

//       // due variabili per confrontare ogni singola lettera dei 2 Array contemporaneamente
//       const letteraEmptyArray = emptyArray[i];
//       const letteraCopyReverseArray = copyReverseArray[i];
      
//       // se la lettera del primo e del secondo Array sono diverse...
//       if(letteraEmptyArray != letteraCopyReverseArray){
//          outputResult.innerHTML = `La parola inserita NON è Palindroma`;
//       }
//    }

//    outputResult.innerHTML = `La parola inserita è Palindroma`;

// })


