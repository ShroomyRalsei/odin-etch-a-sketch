const gridContainer = document.querySelector('#grid-container');

const gridCreator = document.querySelector('#grid-creator');

gridCreator.addEventListener('click', () => {
    gridContainer.innerHTML = "";

    const squareAmount = prompt('How many squares on each side should the new grid have?');

    if(squareAmount == Number(squareAmount) && squareAmount > 0 && squareAmount <= 100) {
        createGrid(squareAmount);
    }
    else if (Number(squareAmount) > 100) {
        alert('100 squares is the limit, please choose another value');
    }
    else {
        alert('Please choose a valid number, default grid chosen');
        createGrid(16);
    }
})

function createGrid(squares) {
    const grid = document.createElement('div');

    grid.setAttribute('id','grid');

    gridContainer.appendChild(grid);

    for (i = 0; i < squares; i++) {
        const horizontalSquare = document.createElement('div');

        horizontalSquare.setAttribute('id', 'horizontal-square')

        grid.appendChild(horizontalSquare);

        for (x = 0; x < squares; x++) {
            const verticalSquare = document.createElement('div');

            verticalSquare.setAttribute('id', 'vertical-square')

            horizontalSquare.appendChild(verticalSquare);

            verticalSquare.addEventListener('mouseover', () => {
                verticalSquare.setAttribute('style', 'background-color:black');
            })
        }
    }
}

createGrid(16);