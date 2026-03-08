let angka = [1, 2, 3, 4, 5];

angka.forEach(function(e) {
    console.log("Angka: " + e);
});

let angkaDikaliDua = angka.map(function(e) {
    return e * 2;
});

console.log(angkaDikaliDua); 