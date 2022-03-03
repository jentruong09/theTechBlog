const newPostFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('.title-edit').value.trim();
    const post = document.querySelector('.text-edit').value.trim();
    
    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
            title, 
            post,
            user_id
        }),
        headers: {'Content-Type': 'application/json'}
    });
    if(response.ok) {
        document.location.replace('/dashboard')
    } else {
        alert('Failed to add new post.')
    }
}

document.querySelector('.form-new-post').addEventListener('submit', newPostFormHandler)