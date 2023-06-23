// --- INITIAL STARTUP OF WEBPAGE --- //


let newColor = null; // allows user to set their own color
let isRainbow = false; // allows user to change to rainbow

// create initial grid layout
const gridSquares = document.querySelector('#grid-squares');
let numberOfSquares = 16;
createSquares(numberOfSquares);
// call draw function for when webpage loads 
draw(newColor);


// --- EVENT LISTENERS --- // 


// dynamically change displaySquares text 
const changeSquares = document.querySelector('.slider');
const displaySquares = document.querySelector('.number-of-squares');
changeSquares.addEventListener('input', () => {
    displaySquares.textContent = `${changeSquares.value}x${changeSquares.value}`;
    createNewSquares();
    draw(newColor);
});

// reset button
const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', () => {
    createNewSquares();
    newColor = null;
    isRainbow = false;
    draw(newColor);
    chooseColor.value = '#ff7f50';
});

// changing color of draw() 
const chooseColor = document.querySelector('#choose-color');
chooseColor.addEventListener('change', () => {
    newColor = chooseColor.value;
    isRainbow = false;
    draw(newColor);
});

// randomize color 
const randomButton = document.querySelector('#random-color');
randomButton.addEventListener('click', () => {
    tempColor = randomColor();
    chooseColor.value = tempColor;
    newColor = null;
    isRainbow = false; 
    draw(tempColor);
});

// draw rainbow
const rainbowButton = document.querySelector('#rainbow-color');
rainbowButton.addEventListener('click', () => {
    isRainbow = true;
});


// --- FUNCTIONS --- // 


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
            if (isRainbow === true && isDrawing === true) {
                div.setAttribute('style', `background-color: ${randomColor()}`);
            }
            else if (newColor !== null && isDrawing === true) {
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

function randomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
  
    return "#" + r + g + b;
}