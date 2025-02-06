
//2 - hobbies.js

//1. Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. 
function createHobbies(hobbyOne, hobbyTwo, hobbyThree ) {
  let arr = [hobbyOne, hobbyTwo, hobbyThree];
    //La funzione dovrebbe restituire  un array di stringhe contenenti gli hobby.
    return arr;
    // in alternativa: return [hobbyOne, hobbyTwo, hobbyThree];
      
  }

//2. Esporta la funzione dal file.
module.exports = createHobbies;