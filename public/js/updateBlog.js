
async function editFormHandler(event) {
    event.preventDefault();
  
    const description = document.querySelector('#edit-text').value;
  
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

    if(description)
      {
        const response = await fetch(`/api/blogs/edit/${id}`, {
          method: 'PUT',
          body: JSON.stringify({
            description
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
      
        if (response.ok) {
            alert(description+" was updated")
           document.location.replace('/dashboard');
        
        } else {
          alert(response.statusText);
        }
      }
  
    
  }
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);