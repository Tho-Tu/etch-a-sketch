// create initial grid layout
const gridSquares = document.querySelector('#grid-squares');
let numberOfSquares = 16;
createSquares(numberOfSquares);

// dynamically change displaySquares text before apply function
const changeSquares = document.querySelector('.slider');
const displaySquares = document.querySelector('.number-of-squares');
changeSquares.addEventListener('input', () => {
    displaySquares.textContent = `${changeSquares.value}x${changeSquares.value}`;
    createNewSquares();
    colorChange();
});

function createNewSquares() {
    gridSquares.textContent = '';
    numberOfSquares = changeSquares.value;
    createSquares(numberOfSquares);
}

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

// reset button
const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', () => {
    createNewSquares();
    colorChange();
});

// mouseover change color
function colorChange() {
    const divGrid = document.querySelectorAll('.grids');
    divGrid.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.classList.toggle('color-change');
        });
    });
}

colorChange();


