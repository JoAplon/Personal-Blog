const userData = JSON.parse(localStorage.getItem('userData'));
if (userData) {
    document.getElementById('display-username').textContent = userData.userName;
    document.getElementById('display-title').textContent = userData.title;
    document.getElementById('display-content').textContent = userData.content;
}