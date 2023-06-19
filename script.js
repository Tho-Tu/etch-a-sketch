// create grid layout
const gridSquares = document.querySelector('#grid-squares');

for (let i = 0; i < 16; i++) {
    const column = document.createElement('div');
    column.setAttribute('class', 'column');
    gridSquares.appendChild(column);


    for (let j = 0; j < 16; j++) {
        const row = document.createElement('div');
        column.appendChild(row);
    }
}
