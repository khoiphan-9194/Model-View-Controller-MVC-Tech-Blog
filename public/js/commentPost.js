async function newCommentHandler(event) {
  event.preventDefault();

 

  // get text and trim whitespace
  const comment_description = document.getElementById("comment").value;
  // get post id from URL
  // const url = window.location.toString().split("/");
  // const blogPost_id = url[url.length - 1];

  const blog_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
    ];

  if (comment_description) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        comment_description,
        blog_id
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}


document
  .getElementById("comment-form")
  .addEventListener("submit", newCommentHandler);

