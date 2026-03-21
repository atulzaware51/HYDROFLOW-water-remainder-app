const waterDrop = document.getElementById('water-drop');
const logBtn = document.getElementById('log-btn');
const snackbar = document.getElementById('snackbar');

let dropSize = 60;
let isCyan = true;

logBtn.addEventListener('click', () => {
    // 1. Grow the water drop, reset if too big
    dropSize += 20;
    if (dropSize > 150) {
        dropSize = 60; 
    }
    
    // Apply the new size (CSS handles the smooth animation)
    waterDrop.style.width = `${dropSize}px`;
    waterDrop.style.height = `${dropSize}px`;

    // 2. Toggle Button Color between Cyan and Blue Accent
    isCyan = !isCyan;
    logBtn.style.backgroundColor = isCyan ? '#00BCD4' : '#448AFF'; 

    // 3. Show the Snackbar notification
    snackbar.className = "snackbar show";
    
    // Hide it again after 3 seconds
    setTimeout(() => {
        snackbar.className = snackbar.className.replace("show", "");
    }, 3000);
});
