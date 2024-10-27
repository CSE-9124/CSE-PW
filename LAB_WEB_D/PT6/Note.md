# <center> <font size = '6'>Introduction to Server Side Programming</font>

## Pengenalan <font color = '#566594'> PHP </font>

### Peran <font color = '#566594'> PHP </font> dalam Pengembangan WEB
<font size = '4'><font color = '#566594'> PHP </font>(*Hypertext Preprocessor*) adalah bahasa pemrograman skrip yang umum digunakan untuk pengembangan web server-side. Peran <font color = '#566594'> PHP </font> meliputi :

| Peran | <center>Penjelasan</center> |
|-------|------------|
| Pemrosesan Formulir | <font color = '#566594'> PHP </font> memungkinkan kita untuk mengambil data yang dikirim melalui formulir <font  color = 'orange'> HTML </font> dan memprosesnya, seperti menyimpannya dalam database. |
| Koneksi ke database | <font color = '#566594'> PHP </font> dapat berkomunikasi dengan database seperti <font color = '#005e8d'>My</font><font color = 'e58d00'>SQL</font>, <font color = 'grey'>SQLite</font>, dan lainnya untuk mengambil, menyimpan, dan mengelola data. |
| Dinamika Halaman Web | Kita dapat menggunakan <font color = '#566594'> PHP </font> untuk membuat halaman web yang dinamis, menampilkan konten yang berubah berdasarkan input pengguna atau data terkini. |
| Interaksi dengan Pengguna | <font color = '#566594'> PHP </font> memungkinkan kita mengelola sesi pengguna, **cookies**, dan lainnya untuk mempertahankan status dan informasi pengguna antara permintaan halaman. |
| Pengolahan File | <font color = '#566594'> PHP </font> dapat digunakan untuk mengunggah dan mengelola file yang diunggah oleh pengguna. |
| Pengelolaan Security | <font color = '#566594'> PHP </font> menyediakan alat untuk mengamankan aplikasi, melindungi dari serangan seperti *Cross-Site Scripting (XSS)* dan *SQL Injection*. |
</font>

### Pengaturan Lingkungan Pengembangan <font color = '#566594'> PHP </font>
<font size = '4'>Contoh penggunaan XAMPP untuk lingkungan pengembangan ## Pengenalan <font color = '#566594'> PHP </font>:

1. Unduh dan instal XAMPP dari https://www.apachefriends.org.
2. Setelah instalasi, jalankan XAMPP Control Panel.
3. Aktifkan modul **Apache** dan **MySQL**.
4. Simpan file <font color = '#566594'> PHP </font> di direktori htdocs (biasanya berada di dalam direktori instalasi XAMPP).
5. Buka peramban web dan akses http://localhost/nama_file.php.

</font>

### Menulis dan Menjalankan Skrip <font color = '#566594'> PHP </font> Pertama
<font size = '4'>Buat berkas baru dengan nama "hello.php" di dalam direktori htdocs:
<div style="text-align: left; padding: 1rem; padding-bottom: 0; max-width: 650px; margin: auto;">

```PHP
<!DOCTYPE html>
<html>
<head>
    <title>PHP Pertama mu</title>
</head>
<body>
    <?php
        echo "Hello, world!";
    ?>
</body>
</html>
```
</div></font>


## Dasar-Dasar <font color = '#566594'> PHP </font>

### Variabel dan Tipe Data <font color = '#566594'> PHP </font>
<font size = '4'>Variabel adalah tempat untuk menyimpan data. Dalam <font color = '#566594'> PHP </font>, tipe data variabel tidak perlu dideklarasikan secara eksplisit. Cukup gunakan tanda `$` pada awalan nama variabel

Contoh:
<div style="text-align: left; padding: 1rem; padding-bottom: 0; max-width: 850px; margin: auto;">

```PHP
<?php
    $nama = "Nanda";    // variabel string
    $umur = 25;         // variabel integer
    $tinggi = 170.2;    // variabel float
    $aktif = true;      // variabel boolean
    $agama = null;      // variabel NULL
    $hobi = ["Membaca", "Memancing", "Menulis"]; // variabel array

    // Untuk mencheck tiap tipe data variabel gunakan var_dump
    echo var_dump($nama);
?>
```
</div>

### Operator dalam <font color = '#566594'> PHP </font>
<font size = '4'><font color = '#566594'> PHP </font> mendukung berbagai operator untuk melakukan operasi pada variabel dan nilai.

Contoh Operator Matematika :
<div style="text-align: left; padding: 1rem; padding-bottom: 0; max-width: 850px; margin: auto;">

```PHP
<?php
    $a = 10;
    $b = 5;

    $jumlah = $a + $b;      // Penjumlahan
    $selisih = $a - $b;     // Pengurangan
    $kali = $a * $b;        // Perkalian
    $bagi = $a / $b;        // Pembagian
    $modulus = $a % $b;     // Modulus (sisa bagi)

    $hasil = ($a + $b) * $b / 2; // Ekspresi kompleks
?>
```
</div>

Contoh Operator Pengkondisian :
<div style="text-align: left; padding: 1rem; padding-bottom: 0; max-width: 850px; margin: auto;">

```PHP
<?php
    $lebihDari = $a > $b; // true
    $kurangDari = $a < $b; // false
    $samaDengan = $a == $b; // false
    $lebihDariSamaDengan = $a >= $b; // true
    $kurangDariSamaDengan = $a <= $b; // false
    $tidakSamaDengan = $a != $b; // true
?>
```
</div>

### Pengkondisian (**if**, **else**, **elseif**, **switch**) <font color = '#566594'> PHP </font>
<font size = '4'>Struktur kontrol digunakan untuk mengontrol alur eksekusi kode berdasarkan kondisi yang
diberikan.

Contoh **if-else** :
<div style="text-align: left; padding: 1rem; padding-bottom: 0; max-width: 850px; margin: auto;">

```PHP
<?php
    $name = "Nanda";
    $is_authenticated = false;

    if ( $is_authenticated ) {
        echo sprintf("Selamat datang $name");
    } else {
        echo 'Kamu tidak memiliki akses untuk halaman ini.';
    }
?>
```
</div>

Contoh **if-elseif-else** :
<div style="text-align: left; padding: 1rem; padding-bottom: 0; max-width: 850px; margin: auto;">

```PHP
<?php
    $x = 10;
    $y = 20;

    if ($x > $y) {
        $message = 'x lebih besar dari y';
    } elseif ($x < $y) {
        $message = 'x lebih kecil dari y';
    } else {
        $message = 'x sama dengan y';
    }

    echo $message;
?>
```
</div>

Contoh **switch** :
<div style="text-align: left; padding: 1rem; padding-bottom: 0; max-width: 950px; margin: auto;">

```PHP
<?php
    $message = '';
    $role = 'author';

    switch ($role) {
        case 'admin':
            $message = 'Selamat datang, admin!';
            break;
        case 'editor':
            $message = 'Selamat datang, editor!';
            break;
        case 'author':
            $message = 'Selamat datang! Apa kamu mau menulis artikel baru?';
            break;
        case 'subscriber':
            $message = 'Selamat datang! Mari check beberapa artikel baru ini';
            break;
        default:
            $message = 'Kamu tidak memiliki akses untuk halaman ini';
    }

    echo $message;
?>
```
</div>

### Perulangan (**for**, **while**, **do-while**, **foreach**)<font color = '#566594'> PHP </font>
<font size = '4'>Perulangan digunakan untuk mengulang kode berulang kali.

Contoh **for** :
<div style="text-align: left; padding: 1rem; padding-bottom: 0; max-width: 650px; margin: auto;">

```PHP
<?php
    for ($i = 1; $i <= 5; $i++) {
        echo "Iterasi ke-$i <br>";
    }
?>
```
</div>

Contoh **while** :
<div style="text-align: left; padding: 1rem; padding-bottom: 0; max-width: 650px; margin: auto;">

```PHP
<?php
    $counter = 1;

    while ($counter <= 5) {
        echo "Iterasi ke-$counter <br>";
        $counter++;
    }
?>
```
</div>

Contoh **do-while** :
<div style="text-align: left; padding: 1rem; padding-bottom: 0; max-width: 650px; margin: auto;">

```PHP
<?php
    $counter = 1;

    do {
        echo "Iterasi ke-$counter <br>";
        $counter++;
    } while ($counter <= 5);
?>
```
</div>

Contoh **foreach** (untuk mengulang elemen dalam array):
<div style="text-align: left; padding: 1rem; padding-bottom: 0; max-width: 650px; margin: auto;">

```PHP
<?php
    $colors = array("Merah", "Hijau", "Biru");

    foreach ($colors as $color) {
        echo "Warna: $color <br>";
    }
?>
```
</div>

### Arrays di <font color = '#566594'> PHP </font>
<font size = '4'>Array adalah struktur data yang digunakan untuk menyimpan sejumlah nilai dalam satu variabel. Dalam PHP, kita dapat membuat berbagai jenis array, termasuk **indexed arrays**, **associative arrays**, dan **multidimensional arrays**.</font>

#### **Indexed Arrays**
<font size = '4'>Indexed arrays adalah jenis array yang mengindeks elemen-elemennya dengan angka. Contoh:
<div style="text-align: left; padding: 1rem; padding-bottom: 0; max-width: 850px; margin: auto;">

```PHP
<?php
    $buah = array("Apel", "Pisang", "Jeruk");
?>
```
</div></font>

#### **Associative Arrays**
<font size = '4'>Associative arrays adalah jenis array di mana setiap elemen memiliki kunci (key) yang terkait. Contoh:
<div style="text-align: left; padding: 1rem; padding-bottom: 0; max-width: 850px; margin: auto;">

```PHP
<?php
    $siswa = array("nama" => "Nanda", "usia" => 20, "Semester" => 5);
?>
```
</div></font>

#### **Multidimensional Arrays**
<font size = '4'>Multidimensional arrays adalah array yang berisi array lain. Contoh:
<div style="text-align: left; padding: 1rem; padding-bottom: 0; max-width: 850px; margin: auto;">

```PHP
<?php
    $siswa = array(
        array("nama" => "Nanda", "usia" => 20),
        array("nama" => "Eka", "usia" => 21)
    );
?>
```
</div></font>

#### **Manipulasi Arrays**
<center>

| Method | <center>Fungsi</center> | <center>Contoh</center> |
|--------|-------------------------|-------------------------|
| `array_unshift` | Tambah Elemen di depan | <pre>$buah = array("Pisang", "Jeruk"); <br>array_unshift($buah, "Apel");</pre> |
| `array_push` | Tambah Elemen di belakang | <pre>$buah = array("Apel", "Pisang"); <br>array_push($buah, "Jeruk");</pre> |
| `array_shift` | Hapus elemen pertama | <pre>$buah = array("Apel", "Pisang", "Jeruk"); <br>array_shift($buah);</pre> |
| `array_pop` | Hapus elemen terakhir | <pre>$buah = array("Apel", "Pisang", "Jeruk"); <br>array_pop($buah)</pre> |
(<a href="Array_Method.php">selengkapnya</a>)
</center>

### Function dalam <font color = '#566594'> PHP </font>
<font size = '4'>Fungsi adalah blok kode yang dapat dipanggil dan dieksekusi. Contoh:
<div style="text-align: left; padding: 1rem; padding-bottom: 0; max-width: 650px; margin: auto;">

```PHP
function welcome($nama) {
    echo "Selamat datang, $nama!";
}

welcome("Nanda"); // Output: "Selamat datang, Nanda!"
```
</div>

Fungsi juga dapat mengembalikan nilai:
<div style="text-align: left; padding: 1rem; padding-bottom: 0; max-width: 650px; margin: auto;">

```PHP
function tambah($a, $b) {
    return $a + $b;
}

$hasil = tambah(3, 4); // Output: 7
```
</div>

Kita juga dapat menginisiasi nilai parameter pada function, apabila parameter tidak diisi ketika dipanggil:
<div style="text-align: left; padding: 1rem; padding-bottom: 0; max-width: 850px; margin: auto;">

```PHP
function create_anchor(
    $text,
    $href = '#', // menginisiasi nilai awal untuk parameter $href
    $title = '', // menginisiasi nilai awal untuk parameter $title
    $target = '_self'
)
{
    // membuat fungsi pembuatan string apabila variabelnya tidak kosong
    $href = $href ? sprintf('href="%s"', $href) : '';
    $title = $title ? sprintf('title="%s"', $title) : '';
    $target = $target ? sprintf('target="%s"', $target) : '';

    return "<a $href $title $target>$text</a>";
}

// memanggil fungsi dan mengisi tiap parameters dengan named argument
$link = create_anchor(
    'PHP Tutorial',
    'https://www.phptutorial.net/',
    target: '_blank'
);

echo $link
```
</div>

Function juga dapat mengatur tipe data parameter atau return pada function:
<div style="text-align: left; padding: 1rem; padding-bottom: 0; max-width: 650px; margin: auto;">

```PHP
// menggunakan tipe data di awal variabel untuk menentukan tipe data variabel
function add(int $x, int $y): int {
    return $x + $y;
}

echo add(10, 20);
```
</div></font>


## Pengolahan Form

### Pengenalan Formulir HTML
<font size = '4'>Formulir <font color = 'orange'>HTML</font> digunakan untuk mengumpulkan data dari pengguna. Ini adalah cara utama untuk berinteraksi dengan pengguna pada halaman web.

Contoh formulir <font color = 'orange'>HTML</font> sederhana:
<div style="text-align: left; padding: 1rem; padding-bottom: 0; max-width: 750px; margin: auto;">

```HTML
<form method="post" action="proses.php">
    <label for="nama">Nama:</label>
    <input type="text" id="nama" name="nama">

    <label for="email">Email:</label>
    <input type="email" id="email" name="email">

    <button type="submit">Kirim</button>
</form>
```
</div></font>

### Metode Pengiriman Data (**GET** vs **POST**)
<font size = '4'>Ada dua metode umum untuk mengirimkan data formulir: **GET** dan **POST**.

1. GET: Data dikirimkan sebagai bagian dari URL dan terbatas pada sekitar 2048 karakter. Cocok untuk permintaan pencarian atau tampilan data.
2. POST: Data dikirimkan dalam badan permintaan HTTP dan tidak terbatas pada panjang. Cocok untuk mengirim data sensitif seperti kata sandi.
</font>

### Menerima dan Memproses Data Formulir di <font color = '#566594'>PHP</font>
<font size = '4'>Contoh skrip <font color = '#566594'>PHP</font> (*proses.php*) untuk menerima data formulir dengan metode POST:
<div style="text-align: left; padding: 1rem; padding-bottom: 0; max-width: 750px; margin: auto;">

```PHP
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = $_POST["nama"];
    $email = $_POST["email"];
    echo "Nama: $nama <br>";
    echo "Email: $email <br>";
}
```
</div></font>

### Validasi Data Input
<font size = '4'>Validasi data input penting untuk memastikan data yang masuk adalah data yang diharapkan.

Contoh validasi sederhana:
<div style="text-align: left; padding: 1rem; padding-bottom: 0; max-width: 750px; margin: auto;">

```PHP
$nama = $_POST["nama"];
if (empty($nama)) {
    echo "Nama harus diisi.";
} else {
    // Proses data
}
```
</div></font>

### Perlindungan dari Serangan *Cross-Site Scripting* (**XSS**)
<font size = '4'>XSS adalah serangan di mana skrip berbahaya disisipkan dalam halaman web dan dieksekusi pada peramban pengguna. Cara melindungi dari XSS:

1. Escape data sebelum menampilkannya di halaman.
2. Gunakan fungsi htmlspecialchars():

<div style="text-align: left; padding: 1rem; padding-bottom: 0; max-width: 750px; margin: auto;">

```PHP
$nama = $_POST["nama"];
$nama_aman = htmlspecialchars($nama, ENT_QUOTES, 'UTF-8');
echo "Nama: $nama_aman";
```
</div>
Jangan pernah menampilkan data yang belum di-escape atau diperiksa ke dalam elemen <font color = 'orange'>HTML</font> tanpa melalui proses pembersihan.</font>

## Cookies dan Sessions

### Pengenalan HTTP Cookies dan Sessions
<font size = '4'>**HTTP** ***Cookies*** dan ***Sessions*** adalah cara untuk menyimpan informasi pada sisi klien dan server guna melacak status pengguna.</font>

### Pengenalan HTTP Cookies dan Sessions
<font size = '4'>Contoh mengatur dan membaca cookie:
<div style="text-align: left; padding: 1rem; padding-bottom: 0; max-width: 850px; margin: auto;">

```PHP
// Mengatur cookie
$nama = "Nanda";
$nilai = 1000;
$expire = time() + (60 * 60 * 24 * 7); // Cookie berlaku selama 1 minggu

setcookie($nama, $nilai, $expire);

// Membaca cookie
if (isset($_COOKIE[$nama])) {
    $nilai_cookie = $_COOKIE[$nama];
    echo "Halo, $nilai_cookie!";
}
```
</div></font>

### Mengelola Sessions untuk Melacak Status Pengguna
<font size = '4'>Contoh memulai dan mengakses session:
<div style="text-align: left; padding: 1rem; padding-bottom: 0; max-width: 850px; margin: auto;">

```PHP
// Memulai session
session_start();

// Menyimpan data dalam session
$_SESSION["user_id"] = 123;
$_SESSION["nama"] = "Arif";

// Mengakses data dari session
if (isset($_SESSION["user_id"])) {
    $user_id = $_SESSION["user_id"];
    echo "User ID: $user_id";
}
```
</div></font>

### Keamanan dan Penyimpanan Data Sensitif
<font size = '4'>

1. Jangan simpan data sensitif dalam cookies, sebab cookies dapat dilihat oleh
pengguna.
2. Jaga kerahasiaan data dalam session dengan mengenkripsi data sensitif dan
selalu memvalidasi penggunaan session.
</font>

### Contoh Penggunaan Kombinasi Cookies dan Sessions
<font size = '4'>
Contoh penggunaan cookies untuk menghitung jumlah kunjungan pengguna dan
session untuk menyimpan data pengguna:
<div style="text-align: left; padding: 1rem; padding-bottom: 0; max-width: 850px; margin: auto;">

```PHP
session_start();

if (isset($_COOKIE["kunjungan"])) {
    $kunjungan = $_COOKIE["kunjungan"] + 1;
} else {
    $kunjungan = 1;
}

// Cookie berlaku selama 1 bulan
setcookie("kunjungan", $kunjungan, time() + (60 * 60 * 24 * 30));
echo "Ini kunjungan Anda yang ke-$kunjungan. <br>";

if (isset($_SESSION["nama"])) {
    echo "Halo, " . $_SESSION["nama"];
} else {
    echo "Selamat datang, pengunjung!";
}
```
</div></font>