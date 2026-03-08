function Mahasiswa(nama, nim, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;
    
    this.sapa = function() {
        return "Halo, nama saya " + this.nama + " dari jurusan " + this.jurusan;
    }
}


let mhs3 = new Mahasiswa("Samuel", "245314008", "Informatika");
console.log(mhs3.sapa());