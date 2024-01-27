// Selação de elementos
const multiplacatorForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
const multiplicationTable = document.querySelector("#multiplication-operations");
const multiplicationTitle = document.querySelector("#multiplication-title span");

// Funções

const createTable = (number, multiplacatorNumber) => {
    multiplicationTable.innerHTML = "";

    for(i = 1; i <= multiplacatorNumber; i++){
        const result = number * i;

        const template = `<div class="row">
        <div class="operation">${number} x ${i} = </div>
        <div class="result">${result}</div>
        </div>`;

        const parser = new DOMParser();

        const htmlTemplate = parser.parseFromString(template, "text/html");

        const row = htmlTemplate.querySelector(".row");

        multiplicationTable.appendChild(row);
    }
    multiplicationTitle.innerHTML = number;
}

// Eventos
multiplacatorForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;
    const multiplacatorNumber = +multiplicationInput.value;

    if (!multiplacatorNumber || !multiplicationNumber) return;

    createTable(multiplicationNumber, multiplacatorNumber);
});