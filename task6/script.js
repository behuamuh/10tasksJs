/**
* Задача 6:
* Сделайте кнопку, по нажатию на которую в браузере будет генерироваться "полумагический" квадрат, 
* в котором сумма чисел в рядах равна одному и тому же числу.
* Конечно же, по каждому нажатию на кнопку должен генерироваться квадрат с другим набором чисел. 
* Размер квадрата пусть задается пользователем в инпуте.
*/
const form = document.querySelector('#form');
const shuffleArray = arr => {
  arr.sort((a, b) => 0.5 - Math.random());
}

const generateTable = size => {
  const table = document.querySelector('table');
  const numbers = new Array(size).fill(0).map((_, index) => index + 1);
  shuffleArray(numbers);
  const newTable = document.createElement('table');
  for (let i = 1; i <= size; i++) {
    const row = document.createElement('tr');
    numbers.forEach(num => {
      const cell = document.createElement('td');
      cell.textContent = num;
      row.appendChild(cell);
    });
    newTable.appendChild(row);
    const last = numbers.pop();
    numbers.unshift(last);
  }
  const parent = table.parentNode;
  parent.replaceChild(newTable, table);
}

const handleSubmit = (e) => {
  e.preventDefault();
  const input = +form.size.value;
  if (typeof input !== 'number' || input !== input) return;
  generateTable(input);
}

form.addEventListener('submit', handleSubmit);