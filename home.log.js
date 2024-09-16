document.addEventListener('DOMContentLoaded', function () {
    const userNameElem = document.getElementById('user-name');
    const logoutBtn = document.getElementById('logout-btn');

    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser) {
        userNameElem.textContent = loggedInUser.name;
    } else {
        window.location.href = 'login.html'; // Redirect to login if no user is logged in
    }

    logoutBtn.addEventListener('click', function () {
        localStorage.removeItem('loggedInUser');
        window.location.href = 'home.html'; // Redirect to login page after logout
    });
});
