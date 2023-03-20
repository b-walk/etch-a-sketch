const INITIAL_SIDE_LENGTH = 50;
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

//Enable Clear button functionality
const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', clearGrid);
function clearGrid() {
    const gridItems = document.querySelectorAll('#grid-container>div');
    for (const gridItem of gridItems) {
        gridItem.removeAttribute('id');
    }
}

//Enable Resize button functionality
const resizeButton = document.querySelector('#resize-button');
resizeButton.addEventListener('click', resize);
function resize() {
    const gridContainer = document.querySelector('#grid-container');
    let newSideLength = getSideLength();
    let gridItems = Array.from(document.querySelectorAll('#grid-container>div'));
    for (const gridItem of gridItems) {
        gridContainer.removeChild(gridItem);
    }
    gridContainer.style.cssText = `grid-template-columns: repeat(${newSideLength}, 1fr);`;
    for (let i = 0; i < newSideLength ** 2; i++) {
        gridContainer.appendChild(document.createElement('div'));
    }
    gridItems = document.querySelectorAll('#grid-container>div');
    for (const gridItem of gridItems) {
        gridItem.classList.add('inactiveGridItem');
        gridItem.addEventListener('mouseover', () => {
            gridItem.setAttribute('id', 'activeGridItem');
        })
    }
}
function getSideLength() {
    let newSideLength = +(prompt('Enter desired side length below\nNumber cannot exceed 100', ''));
    if (!(isFinite(newSideLength)) || newSideLength > 100) {
        return 100;
    } else {
        return newSideLength;
    }
}