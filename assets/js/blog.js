document.getElementById('submit-button').addEventListener('click', function() {
    let userName = document.getElementById('username-input').value;
    let title = document.getElementById('title-input').value;
    let content = document.getElementById('content-input').value;

    localStorage.setItem('userName', userName);
    localStorage.setItem('title', title);
    localStorage.setItem('content', content);
});

function renderDataRetrieve() {
    const dataRetrieve = JSON.parse(localStorage.getItem('userData'));
    if (userData !== null) {
        document.querySelector('username-text').innerhtml = dataRetrieve.userName;
        document.querySelector('title-text').innerhtml = dataRetrieve.titletext;
        document.querySelector('content-text').innerhtml = dataRetrieve.contenttext;
    }
    renderDataRetrieve();
    console.log(dataRetrieve);
}