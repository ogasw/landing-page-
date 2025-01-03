function toggleRegistrationForm() {
    const form = document.getElementById('registrationForm');
    const btn = document.getElementById('toggleBtn');
    if (form.style.display === 'none') {
        form.style.display = 'block';
        btn.textContent = 'Close Registration';
    } else {
        form.style.display = 'none';
        btn.textContent = 'Open Registration';
    }
}

function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const category = document.getElementById('category').value;
    const address = document.getElementById('address').value;
    const comment = document.getElementById('comment').value;

    if (!email || !password || !category || !address) {
        alert("Please fill out all required fields.");
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    alert(`Registration Successful!\nProduct Category: ${category}\nShipping Address: ${address}\nComment: ${comment}`);
    return true;
        }
