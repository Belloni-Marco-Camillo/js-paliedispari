const scelta = prompt(`scegli: dispari o pari`)
console.log(scelta);
sceltaPari = "pari"
sceltaDispari = "dispari"
if (scelta == sceltaPari) {
    console.log(`la scelta è pari`);
    let numeroInput = parseInt(prompt(`inserisci un numero da 1 a 5`))
    console.log(`numero scelto ` + numeroInput);


    let random = Math.floor((Math.random() * 5) + 1);
    console.log(`numero random ` + random);

    let somma = random + numeroInput
    console.log(`la somma è pari a ` + somma);

    if (somma % 2 !== 0) {
        console.log(`la somma dei numeri ${numeroInput} e ${random} è uguale a ${somma} quindi è un numero dispari`);
    } else {
        console.log(`la somma dei numeri ${numeroInput} e ${random} è uguale a ${somma} quindi è un numero pari`);
    }


} else if (scelta == sceltaDispari) {
    console.log(`la scelta è dispari`);
    let numeroInput = parseInt(prompt(`inserisci un numero da 1 a 5`))
    console.log(`numero scelto ` + numeroInput);


    let random = Math.floor((Math.random() * 5) + 1);
    console.log(`numero random ` + random);

    let somma = random + numeroInput
    console.log(`la somma è pari a ` + somma);

    if (somma % 2 !== 0) {
        console.log(`la somma dei numeri ${numeroInput} e ${random} è uguale a ${somma} quindi è un numero dispari`);
    } else {
        console.log(`la somma dei numeri ${numeroInput} e ${random} è uguale a ${somma} quindi è un numero pari`);
    }
} else {
    console.log(`guarda che non hai scritto correttamente`);
}