document.getElementById('btn-submit').addEventListener('click', function () {
    const emailFiled = document.getElementById('user-email');
    const email = emailFiled.value;
    const passwordFiled = document.getElementById('user-password');
    const password = passwordFiled.value;

    if (email === 'sontan.baap@gmail.com' && password === 'laga') {
        window.location.href = 'bank.html'
    } else {
        alert('Invalid user')
    }
});