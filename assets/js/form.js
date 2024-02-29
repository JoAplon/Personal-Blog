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
        window.location.href = 'http://127.0.0.1:5500/blog.html#';

    }
};

if (formInput) {
    formInput.addEventListener('submit', loggUserBlog);
    console.log(formInput);
}

// function renderDataRetrieve() {
//     const dataRetrieve = JSON.parse(localStorage.getItem('userData'));
//     if (dataRetrieve !== null) {
//         document.querySelector('.username-text').innerHTML = dataRetrieve.userName;
//         document.querySelector('.title-text').innerHTML = dataRetrieve.titletext;
//         document.querySelector('.content-text').innerHTML = dataRetrieve.contenttext;
//     }
// }
// renderDataRetrieve();
// console.log(dataRetrieve);