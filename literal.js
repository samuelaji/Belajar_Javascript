let mhs1 = {
    nama: "Samuel",
    nim: "245314008",
    jurusan: "Informatika"
};

function buatObjectMhs(nama, nim, jurusan) {
    let mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.jurusan = jurusan;
    return mhs;
}

let mhs2 = buatObjectMhs("Agus", "245314009", "Informatika");
console.log(mhs1.nama);
console.log(mhs2.nama);