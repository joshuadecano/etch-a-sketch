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
            hue = Math.random() * (360 - 1) + 1;
            squareColor = 'hsl(' + hue + ', 100%, 50%)';
            square.style.backgroundColor = squareColor;
        });
    }
}

function newGrid() {
    let x = prompt("How many boxes per side?");
    if (x>100) {
        alert('Too many squares, please enter a number below 100');
    }
    else if (x<1) {
        alert('Invalid entry, Enter a number between 1-100.');
    }
    else {
        clearGrid();
        createGrid(x);
    }
}

function clearGrid() {
    const grid = document.querySelectorAll('.squareClass');
    for (let i = 0; i < grid.length; i++) {
        grid[i].remove();
    }
}
const container = document.querySelector('#container');

// button to change the grid
const dimensionBtn = document.querySelector('#gridChange');
dimensionBtn.addEventListener('click', newGrid);

// create initial 16x16 grid
createGrid(16);