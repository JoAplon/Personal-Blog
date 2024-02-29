const formInput = document.querySelector('.form-input');
const userName = document.querySelector('.username-text');
const titleText = document.querySelector('.title-text');
const contentText = document.querySelector('.content-text');

function loggUserBlog(event) {
    event.preventDefault();
    if (userName.value.trim() === '' || titleText.value.trim() === '' || contentText.value.trim() === '') {
        alert('Error! Please fill out all fields.');
    } else {
        const userData = {
            userName: userName.value,
            title: titleText.value,
            content: contentText.value.trim(),
        };
        localStorage.setItem('userData', JSON.stringify(userData));
        
    };
}

if(formInput){
formInput.addEventListener('submit', loggUserBlog);
console.log(formInput);
}

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