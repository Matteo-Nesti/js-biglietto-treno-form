console.log('JS OK');
//create variabili per costo biglietto eta` e km  
const ticketPriceForKm = 0.21;

const trainPrice = document.getElementById('ticket-train-price');
const userAge = document.getElementById('ticket-user-age');
const userKm = document.getElementById('ticket-user-km');
// creare variabili per prendere gli input dal DOM
const inputName = document.getElementById('input-name');
const inputAge = document.getElementById('input-age');
const inputKm = document.getElementById('input-km');
const button = document.getElementById('button');

const km = inputKm.value;
const age = inputAge.value;
const name = inputName.value;
console.log(name, age, km);

let discount = 0;
//prezzo del biglietto intero 
const ticketTotalPrice = (km * ticketPriceForKm).toFixed(2);
console.log(ticketTotalPrice + ' prezzo biglietto totale')

// mettere nel DOM informazioni utente 

trainPrice.innerText = ticketTotalPrice + ' €'
userKm.innerText = km + ' Kilometri'
userAge.innerText = ' ' + age + ' Anni'

// cambio discount per eta`

if (age >= 65) discount = 40;
else if (age < 18) discount = 20;

// VERIFICA
//logica principale

if (isNaN(km) || isNaN(age) || age <= 0 || km <= 0) {
    alert('I valori inseriti non risultano validi')
}

else {
    if (discount){
        const discountTicket = (ticketTotalPrice - (ticketTotalPrice * discount / 100)).toFixed(2) 
        console.log(discountTicket + ' discount' + discount + '%')
        
        trainPrice.innerHTML = ` ${discountTicket} € invece di <del>${ticketTotalPrice}</del> € `
    }
}









//soluzione consigliata
/*
let discount = 0;

if (isNaN(km) || isNaN(age) || age < 1) {
    alert('I valori inseriti non risultano validi')
}
else {   
    
    if (age < 18){
        discount = 20     
    }
    else if (age >= 65) {
        discount = 40
    }
}
    
let Ticket = (ticketTotalPrice - (ticketTotalPrice * discount / 100)).toFixed(2)

console.log('discount ' + discount + '%')
console.log(Ticket + ' prezzo biglietto per età ' + age)
*/
