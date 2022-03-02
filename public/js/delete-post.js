const deleteFormHandler = async (event) => {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    
    const answer = await fetch(`/api/post/${id}`< {
        method: 'DELETE',
        body: JSON.stringify({
            post_id: id
        }),
        headers: {'Content-Type': 'application/json'}
    });
    if(answer.ok) {
        document.location.replace('/dashboard')
    } else {
        alert('Failed to delete.')
    }
}

document.querySelector('.delete-btn').addEventListener('submit', deleteFormHandler)