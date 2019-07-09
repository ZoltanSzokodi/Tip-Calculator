const btn = document.querySelector('.input button');
const input = document.querySelector('.input input');
const output = document.querySelector('.output');

btn.addEventListener('click', calcTips);

function calcTips() {
    let amount = Number(input.value);
    output.innerText = `Tips: ${(amount * 0.15).toFixed(2)}`;
}


