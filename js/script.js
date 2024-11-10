document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nameInput = document.getElementById('username').value.trim();

    if (nameInput.toLowerCase() === 'dinverly') {
        window.location.href = 'dinverly.html';
    } else {
        document.getElementById('message').textContent = 'Sorry, access is only for Jayson GF';
    }
});
