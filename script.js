function generatePassword() {
    const includeLetters = document.getElementById('letters').checked;
    const includeNumbers = document.getElementById('numbers').checked;

    const length = 10; // Задайте длину пароля

    let charset = '';
    if (includeLetters) charset += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) charset += '0123456789';

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    const passwordElement = document.getElementById('password');
    passwordElement.innerText = password;
    passwordElement.classList.remove('fadeIn');
    void passwordElement.offsetWidth;
    passwordElement.classList.add('fadeIn');
}
