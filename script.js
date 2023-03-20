function initializeGrid() {
    const gridContainer = document.querySelector('#grid-container');
    for (let i = 0; i < 16; i++) {
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