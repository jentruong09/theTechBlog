const editFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('.title-edit').value;
    const post = document.querySelector('.text-edit').value;
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    
    const answer = await fetch(`/api/post/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title, 
            post
        }),
        headers: {'Content-Type': 'application/json'}
    });
    if(answer.ok) {
        document.location.replace('/dashboard')
    } else {
        alert('Failed to edit.')
    }
}

document.querySelector('.edit-btn').addEventListener('submit', editFormHandler)