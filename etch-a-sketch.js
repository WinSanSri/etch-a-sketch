const btnClr = document.querySelector('.clear');
const btnNew = document.querySelector('.new');
const btnRainbow = document.querySelector('.rainbow');
const inputGrids = document.querySelector('#grids-num');
const container = document.querySelector('.container');
const toggleMsg = document.querySelector('.show-msg');

//always create grid on first load
createGrids(16);

//clear colors and reset grids to 16x16
btnClr.addEventListener('click', clearGrids);

//select rainbow colors when button is clicked
btnRainbow.addEventListener('click', rainbowColor);


//create custom grid from user's input value
btnNew.addEventListener('click', event => {

    //get input value
    let userPrompt = inputGrids.value;

    //has to be between 12-64, show message if it's not
    if(userPrompt === null || userPrompt === '' || userPrompt > 64 || userPrompt < 12) {

        //show message
        showMsg()

    }else {
        //create custom grid
        createGrids(Number(userPrompt));
    }
});

//clear grid and set to 16x16
function clearGrids() {
    container.innerHTML = '';
    createGrids(16);
}

function createGrids(num) {
    
    //clear grid to avoid adding additional grids
    container.innerHTML = '';

    //multiply value
    let grids = num * num;

    //loop through the multiplied value and create div squares
    for(let i = 0; i < grids; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        container.appendChild(square);
    }

    //set default color when mouse is hovered on square
    defaultColor();

    //hide message if shown
    hideMsg()
    
}

//default color set to black
function defaultColor() {
    const allSquares = document.querySelectorAll('.square');

    //loop through all buttons items
    allSquares.forEach(item => {
        item.addEventListener('mouseover', event => {
            item.style.backgroundColor = 'black';

        })
    });
}

function hideMsg() {
    if(toggleMsg.style.display === 'block') {
        toggleMsg.style.display = 'none';
        toggleMsg.textContent = '';
    }else {
        toggleMsg.style.display = 'block';
    }
}

function showMsg() {
    if(toggleMsg.style.display === 'none') {
        toggleMsg.style.display = 'block';
        toggleMsg.textContent = 'Please enter a valid number from 12-64';
    }else {
        toggleMsg.style.display = 'none';
    }
}

//change color to rainbow if button is clicked
function rainbowColor() {
    const allSquares = document.querySelectorAll('.square');

    //loop through all buttons items
    allSquares.forEach(item => {
        item.addEventListener('mouseover', event => {
            
            //create random RGB colors
            const colR = Math.floor(Math.random() * 256);
            const colG = Math.floor(Math.random() * 256);
            const colB = Math.floor(Math.random() * 256);

            item.style.backgroundColor = 'rgb(' + colR + ',' + colG + ',' + colB + ')';

        })
    });
}
