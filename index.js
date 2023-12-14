let hoverColor = 'black';

function createGrid(size) {
    const grid = document.getElementById('grid');
    const squareSize = 100 / size;

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const div = document.createElement('div');
            div.classList.add('grid-squares');
            div.style.width = `${squareSize}%`;
            div.style.height = `${squareSize}%`;
            grid.appendChild(div);
            div.addEventListener('mouseover', mouseOverGrid);
        }
    }
}

function mouseOverGrid(event) {
    if (hoverColor === 'rgb') {
        event.target.style.backgroundColor = getRandomColor();
    } else {
        event.target.style.backgroundColor = hoverColor;
    }
}


function newGridSize() {
    const grid = document.getElementById('grid');
    grid.innerHTML = '';
    hoverColor = 'black';
    let userSize = prompt('Enter the size for the new grid (e.g., Enter 16 for a 16x16 grid (MAXIMUM 100)):');

    if (userSize <= 0 || userSize > 100 || isNaN(userSize)) {
        alert('Enter a valid number between 1 and 100!');
        newGridSize();
    } else {
        createGrid(parseInt(userSize));
    }
}

function changeColorToBlack() {
    hoverColor = 'black';
}

function changeColorToWhite() {
    hoverColor = 'white';
}

function changeColorToGrey() {
    hoverColor = 'grey';
}

function changeColorToRgb() {

}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColorToRgb() {
    hoverColor = 'rgb';
}
createGrid();
