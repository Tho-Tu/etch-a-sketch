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
    draw(newColor);
});

// changing color of draw() 
let newColor = null;
const chooseColor = document.querySelector('#choose-color');
chooseColor.addEventListener('change', () => {
    newColor = chooseColor.value;
    draw(newColor);
});

// reset button
const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', () => {
    createNewSquares();
    newColor = null;
    draw(newColor);
    chooseColor.value = '#ff7f50';
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

function draw(newColor) {
    const divGrid = document.querySelectorAll('.grids');
    let isDrawing = false;
    divGrid.forEach((div) => {
        div.addEventListener('mousedown', () => {
            isDrawing = true;
            if (newColor !== null) {
                div.setAttribute('style', `background-color: ${newColor}`);
            }
            else if (isDrawing === true) {
                div.classList.add('color-change');
            }
        });
        div.addEventListener('mouseover', () => {
            if (newColor !== null && isDrawing === true) {
                div.setAttribute('style', `background-color: ${newColor}`);
            }
            else if (isDrawing === true) {
                div.classList.add('color-change');
            }
        });
        div.addEventListener('mouseup', () => {
            isDrawing = false;
        });
    });
}

// call draw function for when webpage loads 
draw(newColor);

function rainbowColor() {
    let redColor = Math.floor(Math.random() * 255);
    let greenColor = Math.floor(Math.random() * 255);
    let blueColor = Math.floor(Math.random() * 255);

    return randomRGB = rgb(redColor, greenColor, blueColor);
}


