// Get DOM elements
const passwordInput = document.getElementById('password');
const strengthMessage = document.getElementById('strengthMessage');
const strengthIndicator = document.getElementById('strengthIndicator');
const passwordLengthText = document.getElementById('passwordLength');
const passwordFeedback = document.getElementById('passwordFeedback');

// Strength levels and corresponding colors
const strengthLevels = [
    { label: 'Very Weak', color: 'red', feedback: 'Too short and simple. Consider adding uppercase, numbers, and symbols.' },
    { label: 'Weak', color: 'orange', feedback: 'Could be stronger. Add complexity with uppercase and symbols.' },
    { label: 'Moderate', color: 'yellow', feedback: 'A bit stronger. Try adding more characters or symbols.' },
    { label: 'Strong', color: 'lightgreen', feedback: 'Good strength! Consider adding more symbols for extra security.' },
    { label: 'Very Strong', color: 'green', feedback: 'Excellent! This password is highly secure.' }
];

// Check password strength based on various factors
function checkPasswordStrength(password) {
    let strength = 0;
    
    // Criteria for strength calculation
    if (password.length >= 8) strength++;
    if (password.match(/[A-Z]/)) strength++;
    if (password.match(/[0-9]/)) strength++;
    if (password.match(/[^A-Za-z0-9]/)) strength++;

    updateStrengthBar(strength);
}

// Update the strength bar and display the strength message
function updateStrengthBar(strength) {
    let strengthLevel = strengthLevels[strength] || { label: '', color: '#e0e0e0', feedback: '' };

    // Update strength message
    strengthMessage.textContent = strengthLevel.label;
    strengthMessage.style.color = strengthLevel.color;

    // Update strength bar
    strengthIndicator.style.width = (strength * 25) + '%';
    strengthIndicator.style.backgroundColor = strengthLevel.color;

    // Update password length display
    passwordLengthText.textContent = `Password Length: ${passwordInput.value.length} characters`;

    // Update password feedback
    passwordFeedback.textContent = strengthLevel.feedback;
}

// Event listener for input field
passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    checkPasswordStrength(password);
});
