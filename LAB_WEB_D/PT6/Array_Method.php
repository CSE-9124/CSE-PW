<?php
// array_key_exists() : Mengecek keberadaan key array asosiatif
$siswa = array("nama" => "Nanda", "usia" => 20, "Semester" => 7);
if (array_key_exists("usia", $siswa)) {
    echo "Kunci 'usia' ada dalam array.";
}

// array_keys() : Mengembalikan semua key pada array
$siswa = array("nama" => "Eka", "usia" => 21, "Semester" => 7);
$keys = array_keys($siswa);

// in_array() : Mengecek keberadaan value pada array
$buah = array("Apel", "Pisang", "Jeruk");
if (in_array("Apel", $buah)) {
    echo "Apel ada dalam array.";
}

// array_merge() : Menggabungkan dua array
$array1 = array("a" => "merah", "b" => "biru");
$array2 = array("c" => "hijau", "d" => "kuning");
$hasil = array_merge($array1, $array2);

// array_diff() : Mengembalikan selisih dari dua array
$array1 = array("a" => "merah", "b" => "biru", "c" => "hijau");
$array2 = array("a" => "merah", "b" => "biru", "d" => "kuning");
$selisih = array_diff($array1, $array2);
print_r($selisih);

// array_reverse() : Membalikkan urutan array
$buah = array("Apel", "Pisang", "Jeruk");
$buah_terbalik = array_reverse($buah);

// Spread Operator
$array1 = [1, 2, 3];
$array2 = [4, 5, 6];
$gabung = [...$array1, ...$array2];