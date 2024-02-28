const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

    themeToggle.addEventListener('click', function(){
        document.body.classList.toggle('theme-toggle');
        updateThemeIcon();
    });

    function updateThemeIcon(){
        if(document.body.classList.contains('dark-theme'))
        themeIcon.textContent = '🌙';
    } else{
        themeIcon.textContent = '☀️';
    }


