function createGrid(divs) {
    const grid = document.getElementById('grid')

    for (let i = 0; i < divs; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-squares');
        grid.appendChild(div);
    }
}

createGrid(256);