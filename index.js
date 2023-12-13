function createGrid(divs) {
    const grid = document.getElementById('grid')

    for (let i = 0; i < divs; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-squares');
        grid.appendChild(div);
        div.addEventListener('mouseover', mouseOverGrid);
    }
}

function mouseOverGrid(event) {
    const div = event.target;
    event.target.style.background = 'green';
}

createGrid(256);