// Validasi login
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        document.getElementById('error-message').textContent = 'Username dan password harus diisi!';
    } else {
        // Simpan data login ke lokal storage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        console.log('Login berhasil!');
        // Redirect ke halaman utama
        // window.location.href = 'halaman-utama.html';
    }
});

// Validasi create account
document.getElementById('create-account-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const usernameCreate = document.getElementById('username-create').value;
    const passwordCreate = document.getElementById('password-create').value;

    if (nama === '' || email === '' || usernameCreate === '' || passwordCreate === '') {
        document.getElementById('error-message-create').textContent = 'Semua field harus diisi!';
    } else {
        // Simpan data akun ke lokal storage
        localStorage.setItem('nama', nama);
        localStorage.setItem('email', email);
        localStorage.setItem('username', usernameCreate);
        localStorage.setItem('password', passwordCreate);
        console.log('Akun berhasil dibuat!');
        // Redirect ke halaman login
        window.location.href = 'index.html';
    }
});

// Cek apakah user sudah login
if (localStorage.getItem('username') && localStorage.getItem('password')) {
    console.log('User sudah login');
    // Redirect ke halaman utama
    // window.location.href = 'halaman-utama.html';
}