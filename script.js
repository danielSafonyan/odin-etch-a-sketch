let gridSize = 16;
let blockWidth = `width: calc(100%/${gridSize});`
let blockHeight = `height: calc(100%/${gridSize});`

let mode = 'black'

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

const main = document.querySelector('main');

for (let i = 0; i < gridSize * gridSize; i++) {
    const block = document.createElement('div');
    block.classList.add('block');
    block.style.cssText = blockHeight + blockWidth;
    block.addEventListener('mouseover', changeColor);
    main.appendChild(block);
}

