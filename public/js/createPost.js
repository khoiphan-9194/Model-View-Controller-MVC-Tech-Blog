async function createPost(event) {
  event.preventDefault();

  const blog_name = document.querySelector('#post-title').value;
  const description = document.querySelector('#post-text').value;

  if (blog_name && description) {
      const response = await fetch('/api/blogs/', {
          method: 'POST',
          body: JSON.stringify({
          blog_name,
          description,
          }),
          headers: {
              'Content-Type': 'application/json'
          }
      });

      if (response.ok) {
        window.alert("a new Blog created successfully")
          document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
     
          document.location.replace('/');
      }
  }
}

document.querySelector('.new-post-form').addEventListener('submit', createPost);