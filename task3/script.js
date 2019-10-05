/**
* Задача 3:
* Нарисуйте в браузере таблицу умножения, которая будет выглядеть подобной той, которая нарисована на странице обложки школьной тетради.
*/
const app = document.querySelector('.app');
const table = document.createElement('table');

for (let i = 1; i < 10; i++) {
  const row = document.createElement('tr');

  for (let j = 1; j < 10; j++) {
    const cell = document.createElement('td');
    if (!(i === 1 && j === 1)) cell.textContent = i * j;
    row.appendChild(cell);
  }
  table.appendChild(row);
}

app.appendChild(table);