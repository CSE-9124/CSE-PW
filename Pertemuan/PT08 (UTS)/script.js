document.addEventListener('DOMContentLoaded', function () {
    const hariList = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"];
    const jamBatasAwal = "07:30"; // batas awal waktu
    const jamBatasAkhir = "17:50"; // batas akhir waktu
    const kuotaMaksimal = 15; // total kuota per ruangan
    const kuotaPerHari = 3; // maksimal mata kuliah per hari per ruangan

    const lihatJadwalPage = document.getElementById('lihatJadwalPage');
    const editTambahJadwalPage = document.getElementById('editTambahJadwalPage');
    const lihatJadwalBtn = document.getElementById('lihatJadwalBtn');
    const editTambahJadwalBtn = document.getElementById('editTambahJadwalBtn');

    // Fungsi untuk switch antara halaman
    function switchPage(page) {
        if (page === 'lihat') {
            lihatJadwalPage.classList.add('active');
            editTambahJadwalPage.classList.remove('active');
        } else {
            editTambahJadwalPage.classList.add('active');
            lihatJadwalPage.classList.remove('active');
        }
    }

    lihatJadwalBtn.addEventListener('click', () => switchPage('lihat'));
    editTambahJadwalBtn.addEventListener('click', () => switchPage('edit'));

    // Data jadwal kuliah
    const data = {
        ruangan: [
            {
                nama: "PBT 101",
                mataKuliah: [
                    { nama: "Matematika Diskrit", mulai: "08:00", berakhir: "10:00", hari: "Senin" },
                    { nama: "Aljabar Linear", mulai: "10:10", berakhir: "12:00", hari: "Senin" },
                    { nama: "Kalkulus I", mulai: "08:00", berakhir: "10:00", hari: "Selasa" },
                    { nama: "Teori Bilangan", mulai: "10:10", berakhir: "12:00", hari: "Selasa" },
                    { nama: "Statistika Dasar", mulai: "08:00", berakhir: "10:00", hari: "Rabu" },
                    { nama: "Matematika Komputasi", mulai: "10:10", berakhir: "12:00", hari: "Rabu" },
                    { nama: "Persamaan Diferensial", mulai: "08:00", berakhir: "10:00", hari: "Kamis" },
                    { nama: "Geometri", mulai: "10:10", berakhir: "12:00", hari: "Kamis" },
                    { nama: "Analisis Real", mulai: "08:00", berakhir: "10:00", hari: "Jumat" },
                    { nama: "Matematika Terapan", mulai: "10:10", berakhir: "12:00", hari: "Jumat" }
                ]
            },
            {
                nama: "PBT 102",
                mataKuliah: [
                    { nama: "Kalkulus II", mulai: "08:00", berakhir: "10:00", hari: "Senin" },
                    { nama: "Aljabar Linear Lanjutan", mulai: "10:10", berakhir: "12:00", hari: "Senin" },
                    { nama: "Teori Peluang", mulai: "08:00", berakhir: "10:00", hari: "Selasa" },
                    { nama: "Statistika Lanjut", mulai: "10:10", berakhir: "12:00", hari: "Selasa" },
                    { nama: "Analisis Kompleks", mulai: "14:00", berakhir: "16:00", hari: "Selasa" },
                    { nama: "Pemrograman Matematika", mulai: "08:00", berakhir: "10:00", hari: "Rabu" },
                    { nama: "Algoritma dan Pemrograman", mulai: "10:10", berakhir: "12:00", hari: "Rabu" },
                    { nama: "Persamaan Diferensial Parsial", mulai: "08:00", berakhir: "10:00", hari: "Kamis" },
                    { nama: "Topologi", mulai: "10:10", berakhir: "12:00", hari: "Kamis" },
                    { nama: "Filsafat Matematika", mulai: "09:00", berakhir: "11:00", hari: "Kamis" },
                    { nama: "Struktur Data", mulai: "12:00", berakhir: "14:00", hari: "Kamis" },
                    { nama: "Optimisasi", mulai: "08:00", berakhir: "10:00", hari: "Jumat" },
                    { nama: "Matematika Keuangan", mulai: "10:10", berakhir: "12:00", hari: "Jumat" }
                ]
            },
            {
                nama: "PBT 103",
                mataKuliah: [
                    { nama: "Kalkulus II", mulai: "08:00", berakhir: "10:00", hari: "Senin" },
                    { nama: "Geometri Analitik", mulai: "10:10", berakhir: "12:00", hari: "Senin" },
                    { nama: "Matematika Diskrit Lanjut", mulai: "08:00", berakhir: "10:00", hari: "Selasa" },
                    { nama: "Teori Grup", mulai: "10:10", berakhir: "12:00", hari: "Selasa" },
                    { nama: "Statistika Inferensial", mulai: "14:00", berakhir: "16:00", hari: "Selasa" },
                    { nama: "Pemodelan Matematika", mulai: "08:00", berakhir: "10:00", hari: "Rabu" },
                    { nama: "Pengantar Kriptografi", mulai: "10:10", berakhir: "12:00", hari: "Rabu" },
                    { nama: "Metode Numerik", mulai: "08:00", berakhir: "10:00", hari: "Kamis" },
                    { nama: "Matematika Komputasi Lanjut", mulai: "10:10", berakhir: "12:00", hari: "Kamis" },
                    { nama: "Desain Data dan Algoritma", mulai: "12:00", berakhir: "14:00", hari: "Kamis" },
                    { nama: "Analisis Vektor", mulai: "08:00", berakhir: "10:00", hari: "Jumat" },
                    { nama: "Matematika Aktuaria", mulai: "10:10", berakhir: "12:00", hari: "Jumat" }
                ]
            },
            {
                nama: "PBT 104",
                mataKuliah: [
                    { nama: "Kalkulus I", mulai: "08:00", berakhir: "10:00", hari: "Senin" },
                    { nama: "Teori Matriks", mulai: "10:10", berakhir: "12:00", hari: "Senin" },
                    { nama: "Teori Angka Lanjut", mulai: "08:00", berakhir: "10:00", hari: "Selasa" },
                    { nama: "Aljabar Abstrak", mulai: "10:10", berakhir: "12:00", hari: "Selasa" },
                    { nama: "Statistika Multivariat", mulai: "14:00", berakhir: "16:00", hari: "Selasa" },
                    { nama: "Analisis Fourier", mulai: "08:00", berakhir: "10:00", hari: "Rabu" },
                    { nama: "Teori Automata", mulai: "10:10", berakhir: "12:00", hari: "Rabu" },
                    { nama: "Pemrograman Linear", mulai: "08:00", berakhir: "10:00", hari: "Kamis" },
                    { nama: "Analisis Fungsi Banyak Variabel", mulai: "10:10", berakhir: "12:00", hari: "Kamis" },
                    { nama: "Desain Data dan Algoritma Lanjut", mulai: "12:10", berakhir: "14:00", hari: "Kamis" },
                    { nama: "Topologi Lanjut", mulai: "08:00", berakhir: "10:00", hari: "Jumat" },
                    { nama: "Teori Game", mulai: "10:10", berakhir: "12:00", hari: "Jumat" }
                ]
            },
            {
                nama: "PBT 201",
                mataKuliah: [
                    { nama: "Kalkulus Lanjut", mulai: "08:00", berakhir: "10:00", hari: "Senin" },
                    { nama: "Aljabar Linear Lanjut", mulai: "10:10", berakhir: "12:00", hari: "Senin" },
                    { nama: "Analisis Real Lanjut", mulai: "08:00", berakhir: "10:00", hari: "Selasa" },
                    { nama: "Teori Bilangan Lanjut", mulai: "10:10", berakhir: "12:00", hari: "Selasa" },
                    { nama: "Statistika Terapan", mulai: "14:00", berakhir: "16:00", hari: "Selasa" },
                    { nama: "Pemodelan Matematika Lanjut", mulai: "08:00", berakhir: "10:00", hari: "Rabu" },
                    { nama: "Metode Numerik Lanjut", mulai: "10:10", berakhir: "12:00", hari: "Rabu" },
                    { nama: "Persamaan Diferensial Lanjut", mulai: "08:00", berakhir: "10:00", hari: "Kamis" },
                    { nama: "Teori Probabilitas", mulai: "10:10", berakhir: "12:00", hari: "Kamis" },
                    { nama: "Struktur Data Lanjut", mulai: "12:00", berakhir: "14:00", hari: "Kamis" },
                    { nama: "Analisis Vektor Lanjut", mulai: "08:00", berakhir: "10:00", hari: "Jumat" },
                    { nama: "Matematika Keuangan Lanjut", mulai: "10:10", berakhir: "12:00", hari: "Jumat" }
                ]
            },
            {
                nama: "PBT 202",
                mataKuliah: [
                    { nama: "Kalkulus Variabel Banyak", mulai: "08:00", berakhir: "10:00", hari: "Senin" },
                    { nama: "Teori Grup Lanjut", mulai: "10:10", berakhir: "12:00", hari: "Senin" },
                    { nama: "Analisis Kompleks", mulai: "08:00", berakhir: "10:00", hari: "Selasa" },
                    { nama: "Geometri Diferensial", mulai: "10:10", berakhir: "12:00", hari: "Selasa" },
                    { nama: "Statistika Matematika", mulai: "14:00", berakhir: "16:00", hari: "Selasa" },
                    { nama: "Pemrograman Matematika", mulai: "08:00", berakhir: "10:00", hari: "Rabu" },
                    { nama: "Metode Optimisasi", mulai: "10:10", berakhir: "12:00", hari: "Rabu" },
                    { nama: "Persamaan Diferensial Parsial", mulai: "08:00", berakhir: "10:00", hari: "Kamis" },
                    { nama: "Analisis Fungsional", mulai: "10:10", berakhir: "12:00", hari: "Kamis" },
                    { nama: "Desain Data dan Algoritma", mulai: "12:10", berakhir: "14:00", hari: "Kamis" },
                    { nama: "Topologi Lanjut", mulai: "08:00", berakhir: "10:00", hari: "Jumat" },
                    { nama: "Teori Pengambilan Keputusan", mulai: "10:10", berakhir: "12:00", hari: "Jumat" }
                ]
            },
            {
                nama: "PBT 203",
                mataKuliah: [
                    { nama: "Jaringan Komputer", mulai: "09:00", berakhir: "11:00", hari: "Selasa" },
                    { nama: "Pemrograman Web", mulai: "13:00", berakhir: "15:00", hari: "Selasa" },
                    { nama: "Basis Data", mulai: "09:00", berakhir: "11:00", hari: "Kamis" },
                    { nama: "Sistem Operasi", mulai: "13:00", berakhir: "15:00", hari: "Kamis" },
                    { nama: "Pemrograman Berorientasi Objek", mulai: "09:00", berakhir: "11:00", hari: "Jumat" },
                    { nama: "Algoritma dan Struktur Data", mulai: "13:00", berakhir: "15:00", hari: "Jumat" }
                ]
            },
            {
                nama: "PBT 204",
                mataKuliah: [
                    { nama: "Pemrograman Dasar", mulai: "09:00", berakhir: "11:00", hari: "Senin" },
                    { nama: "Pemrograman Web", mulai: "13:00", berakhir: "15:00", hari: "Senin" },
                    { nama: "Basis Data", mulai: "09:00", berakhir: "11:00", hari: "Rabu" },
                    { nama: "Sistem Operasi", mulai: "13:00", berakhir: "15:00", hari: "Rabu" },
                    { nama: "Pemrograman Berorientasi Objek", mulai: "09:00", berakhir: "11:00", hari: "Kamis" },
                    { nama: "Algoritma dan Struktur Data", mulai: "13:00", berakhir: "15:00", hari: "Kamis" }
                ]
            }
        ]
    };

    // Fungsi untuk menampilkan jadwal di carousel
    function renderCarousel() {
        const carouselInner = document.getElementById('carousel-inner');
        carouselInner.innerHTML = ''; // Clear carousel

        hariList.forEach((hari, index) => {
            let carouselItem = `
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    <div class="container">
                        <h2 class="text-center mb-4 poppins-semibold text-jadwal" style="color: white;">Jadwal Hari <span style="color:#007bff;">${hari}</h2>
                        <div class="row">`;

            data.ruangan.forEach((ruangan, i) => {
                let colorClass = `card-color-${(i % 5) + 1}`;
                let jadwalRuangan = '';

                ruangan.mataKuliah.forEach((mk) => {
                    if (mk.hari === hari) {
                        const jadwalHariIni = `${mk.mulai} - ${mk.berakhir}`;
                        jadwalRuangan += `
                            <li class="list-group-item">
                                <strong>${mk.nama}</strong><br>
                                <span>${jadwalHariIni}</span>
                            </li>`;
                    }
                });

                if (jadwalRuangan) {
                    carouselItem += `
                        <div class="col-md-3 mb-4">
                            <div class="cardShow card rounded shadow-sm ${colorClass}">
                                <div class="card-header">
                                    <h5>${ruangan.nama}</h5>
                                </div>
                                <div class="card-body">
                                    <ul class="list-group">
                                        ${jadwalRuangan}
                                    </ul>
                                </div>
                            </div>
                        </div>`;
                }
            });

            carouselItem += `</div></div></div>`;
            carouselInner.insertAdjacentHTML('beforeend', carouselItem);
        });
    }

    // Render carousel pertama kali
    renderCarousel();

    // Fungsi untuk menampilkan jadwal di section edit/tambah
    function renderRooms() {
        console.log('Starting renderRooms function');

        const ruanganContainer = document.getElementById('ruangan-container');
        console.log('ruanganContainer:', ruanganContainer);

        if (!ruanganContainer) {
            console.error('ruangan-container not found');
            return;
        }

        ruanganContainer.innerHTML = ''; // Kosongkan kontainer
        console.log('Cleared ruanganContainer');

        console.log('data.ruangan:', data.ruangan);

        data.ruangan.forEach((ruangan, ruanganIndex) => {
            console.log(`Rendering ruangan ${ruanganIndex}:`, ruangan);

            let colorClass = `card-color-${(ruanganIndex % 5) + 1}`;
            console.log('Color class:', colorClass);

            let cardHtml = `
            <div class="col-md-3 mb-4">
                <div class="cardEdit card rounded shadow-sm ${colorClass} hover-zoom">
                    <div class="card-header bg-primary text-white">
                        <h5 class="card-title">${ruangan.nama}</h5>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">`;

            console.log('mataKuliah:', ruangan.mataKuliah);

            ruangan.mataKuliah.forEach((mk, mataKuliahIndex) => {
                console.log(`Rendering mataKuliah ${mataKuliahIndex}:`, mk);
                const jadwalHariIni = `${mk.mulai} - ${mk.berakhir} (${mk.hari})`;
                cardHtml += `
                    <li class="list-group-item mataKuliah" data-ruangan-index="${ruanganIndex}" data-mata-kuliah-index="${mataKuliahIndex}">
                        <span>
                            <strong>${mk.nama}</strong><br>
                            <span>${jadwalHariIni}</span>
                        </span>
                    </li>`;
            });

            cardHtml += `
                            </ul>`;

            if (ruangan.mataKuliah.length < kuotaMaksimal) {
                console.log(`Adding 'Tambah Jadwal' button for ruangan ${ruanganIndex}`);
                cardHtml += `
                    <button class="btn btn-success btn-tambah" data-ruangan-index="${ruanganIndex}">Tambah Jadwal</button>`;
            }

            cardHtml += `
                        </div>
                    </div>
                </div>`;

            console.log('Inserting cardHtml');
            ruanganContainer.insertAdjacentHTML('beforeend', cardHtml);
        });

        document.querySelectorAll('.btn-tambah').forEach(button => {
            button.addEventListener('click', function () {
                let ruanganIndex = this.dataset.ruanganIndex;
                console.log('Tambah Jadwal clicked, ruanganIndex:', ruanganIndex);
                if (ruanganIndex === undefined) {
                    return;
                }
                document.getElementById('tambahRuanganIndex').value = ruanganIndex;
                new bootstrap.Modal(document.getElementById('tambahModal')).show();
            });
        });


        console.log('Adding event listeners to .mataKuliah');
        document.querySelectorAll('.mataKuliah').forEach(item => {
            item.addEventListener('click', function () {
                let ruanganIndex = this.dataset.ruanganIndex;
                let mataKuliahIndex = this.dataset.mataKuliahIndex;
                console.log('Editing mataKuliah:', ruanganIndex, mataKuliahIndex);
                let mataKuliah = data.ruangan[ruanganIndex].mataKuliah[mataKuliahIndex];

                document.getElementById('mataKuliahName').value = mataKuliah.nama;
                document.getElementById('mataKuliahMulai').value = mataKuliah.mulai;
                document.getElementById('mataKuliahBerakhir').value = mataKuliah.berakhir;
                document.getElementById('hariMataKuliah').value = mataKuliah.hari;
                document.getElementById('ruanganIndex').value = ruanganIndex;
                document.getElementById('mataKuliahIndex').value = mataKuliahIndex;
                new bootstrap.Modal(document.getElementById('editModal')).show();
            });
        });

        console.log('Clearing input fields');
        document.getElementById('tambahNama').value = '';
        document.getElementById('tambahMulai').value = '';
        document.getElementById('tambahBerakhir').value = '';
        document.getElementById('tambahHari').value = '';
    }

    // Render rooms pertama kali
    renderRooms();

    // Simpan perubahan jadwal
    document.getElementById('saveChanges').addEventListener('click', function (event) {
        event.preventDefault();  // Mencegah reload halaman
        let ruanganIndex = document.getElementById('ruanganIndex').value;
        let mataKuliahIndex = document.getElementById('mataKuliahIndex').value;
        let newName = document.getElementById('mataKuliahName').value.trim();  // Trim whitespaces
        let newMulai = document.getElementById('mataKuliahMulai').value;
        let newBerakhir = document.getElementById('mataKuliahBerakhir').value;
        let newHari = document.getElementById('hariMataKuliah').value;

        // Validasi input sebelum menyimpan perubahan
        let oldName = data.ruangan[ruanganIndex].mataKuliah[mataKuliahIndex].nama;
        if (!validateInput(newMulai, newBerakhir, newName, ruanganIndex, newHari, oldName)) {
            return;
        }

        // Update data mata kuliah jika validasi lolos
        data.ruangan[ruanganIndex].mataKuliah[mataKuliahIndex].nama = newName;
        data.ruangan[ruanganIndex].mataKuliah[mataKuliahIndex].mulai = newMulai;
        data.ruangan[ruanganIndex].mataKuliah[mataKuliahIndex].berakhir = newBerakhir;
        data.ruangan[ruanganIndex].mataKuliah[mataKuliahIndex].hari = newHari;

        // Urutkan jadwal berdasarkan waktu mulai
        data.ruangan[ruanganIndex].mataKuliah.sort((a, b) => a.mulai.localeCompare(b.mulai));

        renderRooms();
        renderCarousel(); // Update carousel setelah perubahan
        bootstrap.Modal.getInstance(document.getElementById('editModal')).hide();
    });

    // Hapus jadwal dengan konfirmasi ganda
    document.getElementById('hapusJadwal').addEventListener('click', function () {
        if (!confirm("Apakah Anda yakin ingin menghapus jadwal ini?")) {
            return;
        }

        let ruanganIndex = document.getElementById('ruanganIndex').value;
        let mataKuliahIndex = document.getElementById('mataKuliahIndex').value;

        data.ruangan[ruanganIndex].mataKuliah.splice(mataKuliahIndex, 1);

        renderRooms();
        renderCarousel(); // Update carousel setelah perubahan
        bootstrap.Modal.getInstance(document.getElementById('editModal')).hide();
    });

    // Tambah jadwal baru
    document.getElementById('tambahJadwalBtn').addEventListener('click', function (event) {
        event.preventDefault();  // Mencegah reload halaman
        let ruanganIndex = document.getElementById('tambahRuanganIndex').value;
        console.log('tambahJadwalBtn clicked, ruanganIndex:', ruanganIndex);

        // Convert ruanganIndex to a number and validate
        ruanganIndex = Number(ruanganIndex);
        if (isNaN(ruanganIndex) || ruanganIndex < 0 || ruanganIndex >= data.ruangan.length) {
            console.error('Invalid ruanganIndex:', ruanganIndex);
            alert('Error: Invalid room index');
            return;
        }

        let newName = document.getElementById('tambahNama').value.trim();  // Trim whitespaces
        let newMulai = document.getElementById('tambahMulai').value;
        let newBerakhir = document.getElementById('tambahBerakhir').value;
        let newHari = document.getElementById('tambahHari').value;

        // Validasi input sebelum menambah jadwal
        if (!validateInput(newMulai, newBerakhir, newName, ruanganIndex, newHari)) {
            return;
        }

        data.ruangan[ruanganIndex].mataKuliah.push({
            nama: newName,
            mulai: newMulai,
            berakhir: newBerakhir,
            hari: newHari
        });

        // Urutkan jadwal berdasarkan waktu mulai
        data.ruangan[ruanganIndex].mataKuliah.sort((a, b) => a.mulai.localeCompare(b.mulai));

        renderRooms();
        renderCarousel(); // Update carousel setelah perubahan
        bootstrap.Modal.getInstance(document.getElementById('tambahModal')).hide();
    });

    // Fungsi validasi untuk memastikan jadwal memenuhi aturan
    function validateInput(mulai, berakhir, nama, ruanganIndex, hari, oldName = "") {
        console.log('validateInput called with:', { mulai, berakhir, nama, ruanganIndex, hari, oldName });

        const timePattern = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

        // Validasi input tidak kosong
        if (!nama || !mulai || !berakhir || !hari) {
            alert('Mohon diisi semua inputan.');
            return false;
        }

        // Validasi format waktu
        if (!timePattern.test(mulai) || !timePattern.test(berakhir)) {
            alert('Input waktu harus dalam format HH:MM.');
            return false;
        }

        // Validasi waktu mulai lebih awal dari berakhir
        if (mulai >= berakhir) {
            alert('Waktu mulai harus lebih awal dari waktu berakhir.');
            return false;
        }

        // Validasi waktu tidak kurang dari jam 07:30
        if (mulai < jamBatasAwal) {
            alert('Jadwal tidak boleh dimulai sebelum jam 07:30.');
            return false;
        }

        // Validasi waktu tidak melebihi jam 17:50
        if (berakhir > jamBatasAkhir) {
            alert('Jadwal tidak boleh berakhir setelah jam 17:50.');
            return false;
        }

        if (ruanganIndex === undefined || ruanganIndex === null) {
            console.error('Invalid ruanganIndex:', ruanganIndex);
            alert('Error: Invalid room index');
            return false;
        }

        const ruangan = data.ruangan[ruanganIndex];
        if (!ruangan) {
            console.error('Ruangan not found for index:', ruanganIndex);
            alert('Error: Room not found');
            return false;
        }

        if (!ruangan.mataKuliah) {
            console.error('mataKuliah array not found for ruangan:', ruangan);
            alert('Error: Course list not found for this room');
            return false;
        }

        // Jika nama mata kuliah di-edit dan tidak berubah, lewati validasi bentrok dan maksimal kelas
        if (nama !== oldName) {
            // Validasi jumlah kelas di hari yang sama
            const jumlahJadwalHariIni = ruangan.mataKuliah.filter(mk => mk.hari === hari).length;
            if (jumlahJadwalHariIni >= kuotaPerHari) {
                alert('Maksimal 3 mata kuliah per hari di ruangan ini.');
                return false;
            }

            // Cek apakah nama mata kuliah sudah ada di ruangan dan hari yang lain
            for (const r of data.ruangan) {
                for (const mk of r.mataKuliah) {
                    if (mk.nama === nama) {
                        alert(`Mata kuliah "${nama}" sudah ada di jadwal ${mk.hari}, ruangan ${r.nama}. Harap hapus atau ubah jadwal mata kuliah pertama terlebih dahulu.`);
                        return false;
                    }
                }
            }
        }

        // Fungsi untuk mengonversi waktu "HH:MM" ke total menit
        function convertToMinutes(time) {
            const [hours, minutes] = time.split(":").map(Number);
            return hours * 60 + minutes;
        }

        const mulaiMinutes = convertToMinutes(mulai);
        const berakhirMinutes = convertToMinutes(berakhir);

        // Cek bentrok jadwal dan jeda 10 menit dengan mata kuliah lain pada hari dan ruangan yang sama
        for (const mk of ruangan.mataKuliah) {
            if (mk.hari === hari && mk.nama !== oldName) {
                const mkMulaiMinutes = convertToMinutes(mk.mulai);
                const mkBerakhirMinutes = convertToMinutes(mk.berakhir);

                // Cek jika jadwal bentrok (waktu saling tumpang tindih)
                if ((mulaiMinutes >= mkMulaiMinutes && mulaiMinutes < mkBerakhirMinutes) ||
                    (berakhirMinutes > mkMulaiMinutes && berakhirMinutes <= mkBerakhirMinutes) ||
                    (berakhirMinutes === mkMulaiMinutes)) {
                    alert('Jadwal bentrok dengan mata kuliah lain.');
                    return false;
                }

                // Cek apakah ada jeda minimal 10 menit
                if (Math.abs(mulaiMinutes - mkBerakhirMinutes) < 10 && mkBerakhirMinutes <= mulaiMinutes) {
                    alert('Harus ada jeda minimal 10 menit dengan jadwal sebelumnya.');
                    return false;
                }
            }
        }

        return true;
    }

    // Set placeholder saat menambah mata kuliah
    document.getElementById('tambahNama').placeholder = 'Masukkan nama mata kuliah';
    document.getElementById('tambahMulai').placeholder = 'Masukkan waktu mulai (HH:MM)';
    document.getElementById('tambahBerakhir').placeholder = 'Masukkan waktu berakhir (HH:MM)';
    document.getElementById('tambahHari').placeholder = 'Masukkan hari';



    // Gunakan data.ruangan sebagai sumber data
    const ruangan = data.ruangan;

    // Event listener untuk tombol-tombol di navbar
    document.getElementById('lihatJadwalBtn').addEventListener('click', function () {
        showPage('lihatJadwalPage');
    });

    document.getElementById('editTambahJadwalBtn').addEventListener('click', function () {
        showPage('editTambahJadwalPage');
        renderRooms(); // Render rooms untuk halaman edit/tambah jadwal
    });

    document.getElementById('tambahRuanganBtn').addEventListener('click', function () {
        showPage('tambahRuanganPage');
        updateDaftarRuangan(); // Perbarui daftar ruangan saat halaman dibuka
    });

    // Fungsi untuk menampilkan halaman yang dipilih
    function showPage(pageId) {
        document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
        document.getElementById(pageId).classList.add('active');
    }

    // Event listener untuk form tambah ruangan
    document.getElementById('tambahRuanganForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const namaRuangan = document.getElementById('namaRuanganBaru').value;
        tambahRuanganBaru(namaRuangan);
        this.reset();
    });

    // Fungsi untuk menambah ruangan baru
    function tambahRuanganBaru(namaRuangan) {
        ruangan.push({
            nama: namaRuangan,
            mataKuliah: []
        });
        updateDaftarRuangan();
        renderRooms(); // Update tampilan di halaman edit/tambah jadwal
        alert('Ruangan baru berhasil ditambahkan: ' + namaRuangan);
    }

    // Fungsi untuk memperbarui tampilan daftar ruangan
    function updateDaftarRuangan() {
        const daftarRuanganBody = document.getElementById('daftarRuanganBody');
        daftarRuanganBody.innerHTML = '';

        data.ruangan.forEach((room, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
    <td>${index + 1}</td>
    <td>${room.nama}</td>
    <td>${room.mataKuliah.length}</td>
    <td>
        <button class="btn btn-sm btn-success edit-ruangan" data-index="${index}">
            <ion-icon name="create-outline"></ion-icon> Edit
        </button>
        <button class="btn btn-sm btn-danger hapus-ruangan" data-index="${index}">
            <ion-icon name="trash-outline"></ion-icon> Hapus
        </button>
    </td>
`;

            daftarRuanganBody.appendChild(row);
        });

        addEventListenersToDaftarRuangan();
    }


    // Fungsi untuk menambahkan event listener ke tombol-tombol di daftar ruangan
    function addEventListenersToDaftarRuangan() {
        document.querySelectorAll('.edit-ruangan').forEach(button => {
            button.addEventListener('click', function () {
                const index = this.getAttribute('data-index');
                openEditRuanganModal(index);
            });
        });

        document.querySelectorAll('.hapus-ruangan').forEach(button => {
            button.addEventListener('click', function () {
                const index = this.getAttribute('data-index');
                if (confirm('Apakah Anda yakin ingin menghapus ruangan ini?')) {
                    data.ruangan.splice(index, 1);
                    updateDaftarRuangan();
                    renderRooms();
                    renderCarousel();
                }
            });
        });
    }

    // Inisialisasi saat halaman dimuat
    document.addEventListener('DOMContentLoaded', function () {
        showPage('lihatJadwalPage');
        renderRooms();
    });


    function openEditRuanganModal(index) {
        const ruangan = data.ruangan[index];
        document.getElementById('editRuanganIndex').value = index;
        document.getElementById('editNamaRuangan').value = ruangan.nama;

        const editRuanganModal = new bootstrap.Modal(document.getElementById('editRuanganModal'));
        editRuanganModal.show();
    }

    // Event listener untuk tombol simpan perubahan ruangan
    document.getElementById('saveEditRuangan').addEventListener('click', function () {
        const index = parseInt(document.getElementById('editRuanganIndex').value);
        const newNama = document.getElementById('editNamaRuangan').value.trim();

        console.log('Index:', index);
        console.log('New nama (from input):', newNama);

        if (newNama && newNama.length > 0) {
            if (index >= 0 && index < data.ruangan.length) {
                const currentNama = data.ruangan[index].nama;
                console.log('Current nama:', currentNama);

                if (newNama !== currentNama) {
                    console.log('Updating nama from', currentNama, 'to', newNama);
                    data.ruangan[index].nama = newNama;

                    updateDaftarRuangan();
                    renderRooms();
                    renderCarousel();
                    bootstrap.Modal.getInstance(document.getElementById('editRuanganModal')).hide();
                    alert('Nama ruangan berhasil diubah menjadi: ' + newNama);
                } else {
                    alert('Nama ruangan tidak berubah. Silakan masukkan nama baru atau batalkan.');
                    document.getElementById('editNamaRuangan').focus();
                }
            } else {
                console.error('Index ruangan tidak valid:', index);
                alert('Terjadi kesalahan. Index ruangan tidak valid.');
            }
        } else {
            alert('Nama ruangan tidak boleh kosong!');
            document.getElementById('editNamaRuangan').focus();
        }
    });

    document.getElementById('editNamaRuangan').addEventListener('input', function () {
        console.log('Input value changed:', this.value);
    });


});