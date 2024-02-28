const userName = document.querySelector('.userN');
const title = document.querySelector('.userT');
const contentText = document.querySelector('.userC');
const submit = document.querySelector('.submit');


function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute('class', type);
  }
  
  function lastEntered() {
    const userName = localStorage.getItem('userN');
    const title = localStorage.getItem('userT');
    const contentText = localStorage.getItem('userC');
  
    if (!email || !password) {
      return;
    }
  
    userEmailSpan.textContent = email;
    userPasswordSpan.textContent = password;
  }

  signUpButton.addEventListener('click', function (event) {
    event.preventDefault();
  
    const email = emailInput.value;
    const password = passwordInput.value;
  
    if (email === '') {
      displayMessage('error', 'Email cannot be blank');
    } else if (password === '') {
      displayMessage('error', 'Password cannot be blank');
    } else {
      displayMessage('success', 'Registered successfully');
  
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      renderLastRegistered();
    }
  });  