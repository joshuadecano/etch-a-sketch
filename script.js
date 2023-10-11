const container = document.querySelector('#container');
for (let i = 0; i < 256; i++) {
    const square = document.createElement('div')
    square.className = 'squareClass';
    container.appendChild(square);
    square.addEventListener("mouseover", () => {
        square.id = 'hovered';
    })
}