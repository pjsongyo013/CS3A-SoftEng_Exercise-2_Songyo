const form = document.getElementById('registration-form');
const emailInput = document.getElementById('email');
const verificationMessage = document.getElementById('verification-message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = emailInput.value;
    sendVerificationEmail(email);

    verificationMessage.textContent = 'Verification email sent! Please check your inbox.';
});

function sendVerificationEmail(email) {

    console.log(`Verification email sent to: ${email}`);
}
