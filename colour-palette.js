
// Select elements
const hexId = document.querySelectorAll('.hex_id');
const colour = document.querySelectorAll('.colour');
const hexValueGeneratorButton = document.querySelector('#hexValueGeneratorButton');
const lockToggleButton = document.querySelectorAll('.lock_toggle_button');


// Function to create random hex value

function hexValueGenerator() { 

    for (let i = 0; i < colour.length; i++) {
        
        const hexValue = Math.floor(Math.random()*16777215).toString(16);

        colour[i].style.background = `#${hexValue}`;

        hexId[i].innerHTML = `#${hexValue}`;
        
    }  
}

// Function to toggle lock/unlock on colour divs

function toggleLock (e) {
        if (e.target.dataset.action === "unlocked") {
            console.log('locking!')
        } else {
            console.log('unlocking!')
            
        }
        
}
            


// Event listeners

// For new colour palette generator button
hexValueGeneratorButton.addEventListener('click', hexValueGenerator);

// For lock/unlock button on colour divs
lockToggleButton.forEach((button) => {
    button.addEventListener("click", toggleLock);
  });

// Run hex value generator function on page load

hexValueGenerator();

