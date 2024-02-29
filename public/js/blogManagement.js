async function deleteBlog(event) {
  event.preventDefault();

   // get the post id from the url
   const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
    ];

 console.log("ID--------"+ id)
        // delete the post with an async function
        const response = await fetch(`/api/blogs/${id}`, {
          method: 'DELETE'
        });
      // if the delete action is successful, redirect to the dashboard page, otherwise display the error
      if (response.ok) {
        alert("Deleted");
          document.location.replace('/dashboard');
          // otherwise, display the error
        } else {
          alert(response.statusText);
        }
    }

document.querySelector('#deleteBtn').addEventListener('click', deleteBlog);

//-----------------------------------------------------------------------------------------
async function editBlog(event) {
  event.preventDefault();
   // get the post id from the url
   const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
    ];

        // delete the post with an async function
        const response = await fetch(`/api/blogs/edit/${id}`, {
          method: 'GET'
        });
      // if the delete action is successful, redirect to the dashboard page, otherwise display the error
      if (response.ok) {
     
          document.location.replace(`/api/blogs/edit/${id}`);
          // otherwise, display the error
        } else {
          alert(response.statusText);
        }
    }

document.querySelector('#editBtn').addEventListener('click', editBlog);


  //  <div>
  //       <label for="post-text">Changed on your thought?</label>
  //       <textarea id="post-text" name="post-text"></textarea>
  //     </div>
  //     <button type="submit" class="btn btn-dark mt-3">Update your thought!</button>
  //   </form>
