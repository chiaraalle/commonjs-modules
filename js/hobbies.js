
//2 - hobbies.js

//1. Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. 
function createHobbies(hobbyOne, hobbyTwo, hobbyThree ) {

    //La funzione dovrebbe restituire  un array di stringhe contenenti gli hobby.
    return [hobbyOne, hobbyTwo, hobbyThree];
      
  }
console.log(createHobbies)
//2. Esporta la funzione dal file.
module.exports = createHobbies;