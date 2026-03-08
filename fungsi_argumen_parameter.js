function tambahAngka() {
    let hasil = 0;
    for (let i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
}

console.log(tambahAngka(1, 2, 3)); 
console.log(tambahAngka(10, 20, 30, 40)); 