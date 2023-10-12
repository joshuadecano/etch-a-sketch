const container = document.querySelector('#container');

function createGrid(num) {
    // determine size of square (height and width)
    let squareSize = (960/num);
    // 'area' of the grid
    let area = num*num;

    // create the grid
    for (let i = 0; i < area; i++) {
        const square = document.createElement('div')
        square.className = 'squareClass';
        square.style.height = squareSize + 'px';
        square.style.width = squareSize + 'px';
        container.appendChild(square);
        square.addEventListener("mouseover", () => {
            square.id = 'hovered';
        });
    }
}

function newGrid() {
    let x = prompt("How many boxes per side?");
    clearGrid();
    createGrid(x);
}

function clearGrid() {
    const grid = document.querySelectorAll('.squareClass');
    for (let i = 0; i < grid.length; i++) {
        grid[i].remove();
    }
}

const dimensionBtn = document.querySelector('#gridChange');
dimensionBtn.addEventListener('click', newGrid);

createGrid(16);