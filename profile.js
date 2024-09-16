document.addEventListener('DOMContentLoaded', function () {
    const userNameElem = document.getElementById('user-name');
    const profileDetailsElem = document.getElementById('profile-details');
    const logoutBtn = document.getElementById('logout-btn');

    // Load user profile details
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    
    if (loggedInUser) {
        userNameElem.textContent = loggedInUser.name;
        profileDetailsElem.innerHTML = `
            <p>Email: ${loggedInUser.email}</p>
            <p>Password: ${loggedInUser.password.replace(/./g, '*')}</p>
        `;
    } else {
        window.location.href = 'login.html'; // Redirect to login if no user is logged in
    }

    // Handle logout
    logoutBtn.addEventListener('click', function () {
        localStorage.removeItem('loggedInUser');
        window.location.href = 'home.html'; // Redirect to login page after logout
    });
});
