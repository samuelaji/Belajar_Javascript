let numbers = [1, 5, 2, 8, 9, 3, 4];
let cariFilter = numbers.filter(function(x) {
    return x > 4;
});
console.log("Hasil Filter: " + cariFilter); 
let cariFind = numbers.find(function(x) {
    return x > 4;
});
console.log("Hasil Find: " + cariFind);