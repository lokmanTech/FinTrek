document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'test@fintrek.com' && password === 'Fintrek123') {
        window.location.href = 'main.html';
    } else {
        document.getElementById('loginMessage').textContent = 'Invalid email or password. Please try again.';
    }
});
