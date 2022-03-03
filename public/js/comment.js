const commentFormHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('.text-comment').value.trim()

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'POST',
        body: JSON.stringify({
            post_id,
            comment,
            user_id
        }),
        headers: {
            'Content Type': 'application/json'
        }
    })
    if(response.ok) {
        document.location.reload();
    } else {
        alert('Failed to comment.')
    }
}

document.querySelector('.comments').addEventListener('submit', commentFormHandler)