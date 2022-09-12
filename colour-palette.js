
// Select elements
const hexId = document.querySelectorAll('.hex_id');
const colour = document.querySelectorAll('.colour');
const hexValueGeneratorButton = document.querySelector('#hexValueGeneratorButton');

// Function to create random hex value

function hexValueGenerator() { 

    for (let i = 0; i < colour.length; i++) {
        
        const hexValue = Math.floor(Math.random()*16777215).toString(16);

        colour[i].style.background = `#${hexValue}`;

        hexId[i].innerHTML = `#${hexValue}`;
        
    }  
}


// Event listeners

hexValueGeneratorButton.addEventListener('click', hexValueGenerator);


// Run hex value generator function on page load

hexValueGenerator();

