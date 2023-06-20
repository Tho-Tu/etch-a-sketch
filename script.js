// create grid layout
const gridSquares = document.querySelector('#grid-squares');

let numberOfSquares = 16;
createSquares(numberOfSquares);

// function getNumberOfSquares() {
//     numberOfSquares = 
// }

function createSquares(numberOfSquares) {
    for (let i = 0; i < numberOfSquares; i++) {
        const column = document.createElement('div');
        column.setAttribute('class', 'column');
        gridSquares.appendChild(column);


        for (let j = 0; j < numberOfSquares; j++) {
            const row = document.createElement('div');
            row.setAttribute('class', 'grids');
            column.appendChild(row);
        }
    }
}

// mouseover change color
const divGrid = document.querySelectorAll('.grids');
divGrid.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.classList.toggle('color-change');
    })
})

