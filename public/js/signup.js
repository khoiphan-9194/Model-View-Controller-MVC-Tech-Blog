async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && password) {
      const response = await fetch('/api/users/signup', {
          method: 'post',
          body: JSON.stringify({
              username,
              password
          }),
          headers: {
              'Content-Type': 'application/json'
          }
      });

      if (response.ok) {
        window.alert("User created successfully")
          document.location.replace('/');
      } else {
          alert(response.statusText);
      }
  }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);