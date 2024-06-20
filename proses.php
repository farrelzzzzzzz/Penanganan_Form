<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hasil Pengiriman Form Biodata</title>
    <link rel="stylesheet" href="php.css">
</head>
<body>
    <h2>Hasil Pengiriman Form Biodata</h2>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Ambil data dari form
        $nama = htmlspecialchars($_POST['nama']);
        $email = htmlspecialchars($_POST['email']);
        $pass = htmlspecialchars($_POST['pass']);
        $gender = htmlspecialchars($_POST['gender']);
        $ide = htmlspecialchars($_POST['ide']);
        $asal = htmlspecialchars($_POST['asal']);
        $day = htmlspecialchars($_POST['day']);
        $bio = htmlspecialchars($_POST['bio']);

        // Tampilkan data
        echo "<p>Nama: $nama</p>";
        echo "<p>Email: $email</p>";
        echo "<p>Password: $pass</p>";
        echo "<p>Jenis Kelamin: $gender</p>";
        echo "<p>Ide-Ide: $ide</p>";
        echo "<p>Asal: $asal</p>";
        echo "<p>Tanggal Lahir: $day</p>";
        echo "<p>Bio: $bio</p>";
    } else {
        echo "<p>Metode pengiriman form tidak valid.</p>";
    }
    ?>

</body>
</html>
