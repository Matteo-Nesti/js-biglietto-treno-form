console.log('JS OK');
//create variabili per costo biglietto eta` e km  
const ticketPriceForKm = 0.21;
const trainPrice = document.getElementById('ticket-train-price');
const userAge = document.getElementById('ticket-user-age');
const userKm = document.getElementById('ticket-user-km');
const userName = document.getElementById('user-name');
// creare variabili per prendere gli input dal DOM
const inputName = document.getElementById('input-name');
const inputAge = document.getElementById('input-age');
const inputKm = document.getElementById('input-km');
const button = document.getElementById('button');
const minor = document.getElementById('minor')
const over65 = document.getElementById('over-65')
let discount = 0;

// evento per richiamare gli input
button.addEventListener('click', function(){ 

    const name = inputName.value.trim();
    console.log(name + ' nome')
    userName.innerText = name
    
    const km = inputKm.value;
    console.log(km + ' km')
    userKm.innerText = km + ' chilometri'

    const age = inputAge.value;
    console.log(age + ' fascia eta')
    userAge.innerText = age

    
    
    const ticketTotalPrice = (km * ticketPriceForKm).toFixed(2);
    console.log(ticketTotalPrice + ' prezzo biglietto totale')

    const junior = minor.value
    console.log(junior + ' value minor')
    const senior = over65.value
    console.log(senior + ' value over65')

    if (age===junior) discount = 20
    else if (age===senior) discount = 40

    if (discount){
        const discountTicket = (ticketTotalPrice - (ticketTotalPrice * discount / 100)).toFixed(2) 
        console.log(discountTicket + ' discount' + discount + '%')
        
        trainPrice.innerHTML = ` ${discountTicket} € invece di <del>${ticketTotalPrice}</del> € `
    }
    else {
        trainPrice.innerHTML = ticketTotalPrice + '€'
    }
})












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
