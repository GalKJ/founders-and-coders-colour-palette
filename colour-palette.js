
// Select elements
const hexId = document.querySelectorAll('.hex_id');
const colour = document.querySelectorAll('.colour');
const hexValueGeneratorButton = document.querySelector('#hexValueGeneratorButton');

// Function to create random hex value

function hexValueGenerator() { 
    colour.forEach(element => {
        const hexValue = Math.floor(Math.random()*16777215).toString(16);
    element.style.background = "#" + hexValue;
    });

    hexId.forEach(element => {
        const hexValue = Math.floor(Math.random()*16777215).toString(16);
    element.innerHTML = "#" + hexValue;
    });
    
}

// Event listeners

hexValueGeneratorButton.addEventListener('click', hexValueGenerator);

// Run hex value generator function on page launch

hexValueGenerator();