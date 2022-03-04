const newPostFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value.trim();
    const post = document.querySelector('textarea[name="post-body"]').value.trim();
    
    await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({
          title,
          post,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
    
      document.location.replace('/dashboard');
}

document
  .querySelector('#new-post-form')
  .addEventListener('submit', newPostFormHandler);