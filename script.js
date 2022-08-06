let mode = 'black'
const main = document.querySelector('main');
const refreshButton = document.querySelector('#refresh');
const displayedGridSize = document.querySelector('#gridSize');
refreshButton.addEventListener('click', clearGrid);


function changeColor() {
    switch(mode) {
        case 'black':
            this.style['background-color'] = 'black';
            break;
        case 'erase':
            this.style['background-color'] = 'white';
            break;
        case 'color':
            this.style['background-color'] = 'red';
            break;
    }
}

function drawGrid(gridSize=16) {
    let drawingArea = document.querySelector('.main-wrap');
    console.log(main)
    drawingArea.remove();
    drawingArea = document.createElement('div');
    drawingArea.classList.add('main-wrap');
    let blockWidth = `width: calc(100%/${gridSize});`
    let blockHeight = `height: calc(100%/${gridSize});`
    for (let i = 0; i < gridSize * gridSize; i++) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.cssText = blockHeight + blockWidth;
        block.addEventListener('mouseover', changeColor);
        drawingArea.appendChild(block);
    }
    main.appendChild(drawingArea);
}

function clearGrid() {
    const blockList = document.querySelectorAll("main .block");
    blockList.forEach(block => block.style['background-color'] = 'white');
}

const slider = document.querySelector('.slider input');
slider.addEventListener('input', changeGridSize)

function changeGridSize() {
    let gridSize = slider.value;
    displayedGridSize.innerText = gridSize;
    drawGrid(gridSize);
}

drawGrid();
