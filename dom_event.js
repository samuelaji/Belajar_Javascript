const btnUbah = document.getElementById('btn-ubah');

btnUbah.addEventListener('click', function() {
    document.body.classList.toggle('biru-muda');
});

const p4 = document.querySelector('#b p');
p4.addEventListener('mouseenter', function() {
    p4.style.backgroundColor = 'lightgreen';
});

p4.addEventListener('mouseleave', function() {
    p4.style.backgroundColor = 'white';
});