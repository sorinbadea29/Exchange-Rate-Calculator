const currencySelect_one = document.getElementById('currency-one');
const currencyAmount_one = document.getElementById('amount-one');
const currencySelect_two = document.getElementById('currency-two');
const currencyAmount_two = document.getElementById('amount-two');
const swapBtn = document.getElementById('swap');
const rateEl = document.getElementById('rate');

async function calculate(){
  const res = 
    await fetch(`https://api.exchangerate-api.com/v4/latest/${currencySelect_one.value}`);
  const data = 
    await res.json();
  const rate = `${data.rates[currencySelect_two.value]}`;
  rateEl.innerHTML = 
    `1 ${currencySelect_one.value} = ${Number(rate).toFixed(3)} ${currencySelect_two.value}`;
  currencyAmount_two.value = (currencyAmount_one.value * rate).toFixed(2);
  currencyAmount_one.autofocus;
}

function swap(){
  const temp = currencySelect_one.value;
  currencySelect_one.value = currencySelect_two.value;
  currencySelect_two.value = temp;
  calculate();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', calculate);
currencySelect_one.addEventListener("change", calculate);
currencyAmount_one.addEventListener("input", calculate);
currencySelect_two.addEventListener("change", calculate);
currencyAmount_two.addEventListener("input", calculate);
swapBtn.addEventListener('click', swap);


