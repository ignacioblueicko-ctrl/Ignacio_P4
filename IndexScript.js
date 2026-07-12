const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
}

function updateDateTime() {
    const now = new Date();
    const hours = now.getHours();
    let greeting = '';

    if (hours < 12) greeting = 'Good Morning!';
    else if (hours < 18) greeting = 'Good Afternoon!';
    else greeting = 'Good Evening!';

    const dateTimeStr = now.toLocaleString();

    const greetingEl = document.getElementById('greeting');
    const datetimeEl = document.getElementById('datetime');

    if (greetingEl) greetingEl.textContent = greeting;
    if (datetimeEl) datetimeEl.textContent = dateTimeStr;
}

updateDateTime();
setInterval(updateDateTime, 1000);

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let valid = true;

        // Reset errors
        document.querySelectorAll('.error').forEach(el => el.textContent = '');
        document.getElementById('formSuccess').textContent = '';

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '') {
            document.getElementById('nameError').textContent = 'Please enter your full name.';
            valid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById('emailError').textContent = 'Please enter a valid email address.';
            valid = false;
        }

        if (message === '') {
            document.getElementById('messageError').textContent = 'Please enter your message.';
            valid = false;
        }

        if (valid) {
            document.getElementById('formSuccess').textContent = 'Message sent successfully!';
            contactForm.reset();
        }
    });
}