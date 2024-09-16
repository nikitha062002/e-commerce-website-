document.addEventListener('DOMContentLoaded', function () {
    const flipContainer = document.getElementById('flip-container');
    const flipBtn = document.getElementById('flip-btn');
    const flipBackBtn = document.getElementById('flip-back-btn');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    flipBtn.addEventListener('click', () => {
        flipContainer.classList.add('flipped');
    });

    flipBackBtn.addEventListener('click', () => {
        flipContainer.classList.remove('flipped');
    });

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Mock database check
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email);

        if (user && user.password === password) {
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            window.location.href = 'home-profile.html'; // Redirect to home-profile page
        } else if (user) {
            alert('Incorrect password. Please try again.');
        } else {
            alert('Account does not exist. Please sign up.');
        }
    });

    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email-signup').value;
        const password = document.getElementById('password-signup').value;

        // Mock database check
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const existingUser = users.find(user => user.email === email);

        if (existingUser) {
            alert('Account already exists. Please log in.');
        } else {
            users.push({ name, email, password });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Account created successfully. Please log in.');
            flipContainer.classList.remove('flipped'); // Switch to login side
        }
    });
});
