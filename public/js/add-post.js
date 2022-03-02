const newPostFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('.title-edit').value;
    const post = document.querySelector('.text-edit').value;
    
    const answer = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({
            title, 
            post
        }),
        headers: {'Content-Type': 'application/json'}
    });
    if(answer.ok) {
        document.location.replace('/dashboard')
    } else {
        alert('Failed to add new post.')
    }
}

document.querySelector('.create-btn').addEventListener('submit', newPostFormHandler)