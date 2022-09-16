
// Select elements
const hexId = document.querySelectorAll('.hex_id');
const colour = document.querySelectorAll('.colour');
const hexValueGeneratorButton = document.querySelector('#hexValueGeneratorButton');
const lockToggleButton = document.querySelectorAll('.lock_toggle_button');
const lockIcons = document.querySelectorAll('i');


// Function to create random hex value

function hexValueGenerator() { 

    for (let i = 0; i < colour.length; i++) {
        
        const hexValue = Math.floor(Math.random()*16777215).toString(16);

        if (hexValue.length < 6) {

            hexValueGenerator()
            
        } else if (lockIcons[i].dataset.action === 'unlocked') {
            colour[i].style.background = `#${hexValue}`;

            hexId[i].innerHTML = `#${hexValue}`;
        }

        
        
    }  
}

// Function to toggle lock/unlock on colour divs

function toggleLock (e) {


        if (e.target.dataset.action === 'unlocked') {
            
            e.target.dataset.action = 'locked'

            // e.target.parentElement.parentElement.classList.remove('colour');

            // console.log(e.target.parentElement.parentElement);

            // console.log(e.target.dataset.action)
            
            // for (let i = 0; i < colour.length; i++) {
                
            //     const lockedColour = colour[i];

            //     if (condition) {
                    
            //     } else {
                    
            //     }
                
            // }

        } else {
            e.target.dataset.action = 'unlocked'
            
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

