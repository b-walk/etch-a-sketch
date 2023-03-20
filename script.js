const INITIAL_SIDE_LENGTH = 100;
function initializeGrid() {
    const gridContainer = document.querySelector('#grid-container');
    gridContainer.style.cssText = `grid-template-columns: repeat(${INITIAL_SIDE_LENGTH}, 1fr);`;
    for (let i = 0; i < INITIAL_SIDE_LENGTH ** 2; i++) {
        gridContainer.appendChild(document.createElement('div'));
    }
    const gridItems = document.querySelectorAll('#grid-container>div');
    for (const gridItem of gridItems) {
        gridItem.classList.add('inactiveGridItem');
        gridItem.addEventListener('mouseover', () => {
            gridItem.setAttribute('id', 'activeGridItem');
        })
    }
}
initializeGrid();


const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', clearGrid);
function clearGrid() {
    const gridItems = document.querySelectorAll('#grid-container>div');
    for (const gridItem of gridItems) {
        gridItem.removeAttribute('id');
    }
}