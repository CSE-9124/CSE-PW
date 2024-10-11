let profile = {
    firstName: "Ahmad",
    lastName: "Iffat",
    age: 21,
    hobbies: [
        "Reading",
        "Football",
        "Swimming",
        "Cycling",
        "Memancing"
    ],
    job: "Mahasiswa"
};

function tambahProfile() {
    document.getElementById("profileData").textContent = JSON.stringify(profile, null, 4);
}

function tambahPekerjaan() {
    let pekerjaan = document.getElementById("job").value;
    if (pekerjaan) {
        profile.job = pekerjaan;
        tambahProfile();
    }
}

function hapusUsia() {
    delete profile.age;
    tambahProfile();
}

function tambahHobi(posisi) {
    let hobi = document.getElementById("hobi").value;
    if (hobi) {
        if (posisi === 'akhir') {
            profile.hobbies.push(hobi);
        } else if (posisi === 'awal') {
            profile.hobbies.unshift(hobi);
        } else if (posisi === 'tengah') {
            let tengah = Math.floor(profile.hobbies.length / 2);
            profile.hobbies.splice(tengah, 0, hobi);
        }
        tambahProfile();
    }
}

function hapusHobi() {
    let hobi = document.getElementById("Hobihapus").value;
    let index = profile.hobbies.indexOf(hobi);
    if (index !== -1) {
        profile.hobbies.splice(index, 1);
        tambahProfile();
    } else {
        alert("Hobi tidak ditemukan");
    }
}

tambahProfile();