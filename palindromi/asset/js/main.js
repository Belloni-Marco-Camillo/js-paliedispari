let boolean = true
const textInput = prompt('inserisci una parola');

function provaPalindromi() {

    const lunghezza = textInput.length; //definisco una lunghezza della parola

    for (let i = 0; i < lunghezza; i++) { //faccio ciclo for e divido la parola in due

        if (textInput[i] !== textInput[lunghezza - 1 - i]) { //comparo il primo e l'ultimo carattere se sono diversi
            boolean = false //se sono diversi la mia variabile cambia da vera a falsa
        }
    }

    if (boolean == true) { //se la mia variabile è rimasta invariata, vuol dire che le lettere comparate sono sempre state uguali
        alert(`la parola ${textInput} è una parola palindroma`); //stampo è la parola e dico che è palindroma
    } else if (boolean == false) { //se la mia variabile varia vuol dire che le lettere comparate non sono uguali tra loro
        alert(`la parola ${textInput} NON è una parola palindroma`)
    }
}


const prova = provaPalindromi(textInput);