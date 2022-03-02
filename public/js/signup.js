const { response } = require("express");

const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-input').value.trim()
    const email = document.querySelector('#exampleInputEmail1').value.trim()
    const password = document.querySelector('#exampleInputPassword1').value.trim()

    if(username && email && password) {
        const answer = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        })
        if(answer.ok) {
            document.location.replace('/dashboard')
        } else {
            alert('Failed to sign up.')
        }
    }
}

document.querySelector('.signup-btn').addEventListener('submit', signupFormHandler)