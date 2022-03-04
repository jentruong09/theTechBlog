const commentFormHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('textarea[name="comment-body"]').value;

    const post_id = document.querySelector('input[name="post-id"]').value;

    if (comment) {
        await fetch('/api/comment', {
          method: 'POST',
          body: JSON.stringify({
            post_id,
            comment
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
    
        document.location.reload();
      }
}

document
  .querySelector('#comment-form')
  .addEventListener('submit', commentFormHandler);