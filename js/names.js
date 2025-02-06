
//1 - names.js
 
//1. Crea una funzione che accetta due parametri: firstName, lastName.
function createNames(firstName, lastName) {

    //La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
    return {
        firstName: firstName,
        lastName: lastName 
    };
  }

  //2. Esporta la funzione dal file.
module.exports = createNames;