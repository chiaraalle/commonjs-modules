
//3 - people.js
//1. Importa la tua funzione da names.js
const fullNames = require("./names.js");

//2. Importa la tua funzione da hobbies.js
const createHobbies = require("./hobbies.js");

//3. Crea una funzione che non ha parametri.
function createObject() {
    //creo una variabile e la inizializzo con un oggetto che mi è stato restituito dalla funzione createNames a cui ho dato i due parametri.
    let nameAndSurname = fullNames("chiara", "allegrino") 
    //creo una variabile e la inizializzo con un array che mi è stato restituito dalla funzione createHobbies a cui ho dato i tre parametri.
    let hobbies = createHobbies("giardinaggio", "disegnare", "pattinaggio")
    let person = {
        fullname: nameAndSurname,
        hobbies: hobbies
    }


    //La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies.
    return person;
  }
  console.log(createObject())
 
//All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.
