// color mode by default
let mode = 'black'

const main = document.querySelector('main');
const refreshButton = document.querySelector('#refresh');
const saveButton = document.querySelector('#save');
saveButton.addEventListener('click', saveDrawing);
const displayedGridSize = document.querySelector('#gridSize');
refreshButton.addEventListener('click', clearGrid);

function saveDrawing() {
    console.log('I was clicked.')
    const drawedContent = document.querySelector('main').innerHTML;
    download(drawedContent)
}

function download(text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + 
    encodeURIComponent(text));
    element.setAttribute('download', 'drawing.html');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
   }

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function changeColor() {
    switch(mode) {
        case 'black':
            this.style['background-color'] = 'black';
            break;
        case 'random':
            this.style['background-color'] = getRandomColor();
            break;
        case 'own':
            let ownColorInput = document.querySelector('input[name=head]');
            this.style['background-color'] = ownColorInput.value;
            break;
    }
}

function drawGrid(gridSize=16) {
    let drawingArea = document.querySelector('.main-wrap');
    drawingArea.remove();
    drawingArea = document.createElement('div');
    drawingArea.classList.add('main-wrap'); 
    let displaySettings = 'border: 1px solid black;width: 30vw;height: 30vw;display: flex;flex-wrap: wrap;';
    drawingArea.style.cssText = displaySettings;
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

const colorSwitcher = document.querySelectorAll('input[name=penColor]');
colorSwitcher.forEach( input => input.addEventListener('input', inputSwitchColor))
function inputSwitchColor() {
    mode = this.defaultValue
}