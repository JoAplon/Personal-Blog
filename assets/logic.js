const container = document.querySelector('html');
const themeButton = document.querySelector('#theme-toggle');

let mode = 'lighttheme';

themeButton.addEventListener('click', function() {
    if (mode === 'lighttheme') {
        mode = 'darktheme';
        container.setAttribute('class', 'darktheme');
        themeButton.textContent = '🌙';
    }
    else{
        mode = 'lighttheme';
        container.setAttribute('class', 'lighttheme');
        themeButton.textContent = '☀️';
    }
});