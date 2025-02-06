
//1 - names.js
 
//1. Crea una funzione che accetta due parametri: firstName, lastName.
function createNames(firstName, lastName) {
  let obj = {
    firstName: firstName,
    lastName: lastName
  }
    //La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
    return obj
    /*in alternativa: 
    return {
        firstName: firstName,
        lastName: lastName 
    };*/
  }

  //2. Esporta la funzione dal file.
module.exports = createNames;