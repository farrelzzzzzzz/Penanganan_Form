function validasiform(){
// Mengambil Nilai Dari Form
const nama = document.getElementById('nama').value;
const email = document.getElementById('email').value;
const pass = document.getElementById('pass').value;
const gender = document.querySelector('input[name="gender"]:checked');
const ide = document.getElementById('ide').value;
const day = document.getElementById('day').value;
const asal = document.getElementById('asal').value;
const bio = document.getElementById('bio').value;

// Pola Untuk Validasi
const namePattern = /^[A-Za-z\s]+$/;
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const passPattern = /^[a-zA-Z0-9]{6,20}$/;

// Validasi Nama
if(nama === ""){
    alert("Nama Tidak Boleh Kosong");
    return false;
}else if(!namePattern.test(nama)){
    alert("Nama Hanya Boleh Mengandung Huruf dan Spasi");
    return false;
}

// Validasi Email
if(email === ""){
    alert("Email Tidak Boleh Kosong");
    return false;
}else if (!emailPattern.test(email)){
    alert("Email Tidak Valid");
    return false;
}

// Validasi Password
if(pass === ""){
    alert("Password Tidak Boleh Kosong");
    return false;
}else if(!passPattern.test(pass)){
    alert("Password Harus Terdiri Dari 6-20 Karakter");
    return false;
}

// Validasi Jenis Kelamin
if(!gender){
    alert("Pilih Jenis Kelamin");
    return false;
}

// Validasi Ide
if(ide === ""){
    alert("Ide Tidak Boleh Kosong");
    return false;
}

// Validasi Asal
if(asal === ""){
    alert("Asal Tidak Boleh Kosong");
    return false;
}

//validasi untuk hari
if (day === "") {
    alert("Tanggal Lahir harus diisi!");
    document.getElementById('day').focus();
    return false;
}

// Validasi bio
if(bio === ""){
    alert("Bio Tidak Boleh Kosong");
    return false;
}

// Jika Validasi Berhasil
alert("Form Berhasil Disimpan ! ");
return true;
}