const judul = document.getElementById('judul');
judul.innerHTML = '<em>Judul Diubah Menjadi Miring</em>';


const p2 = document.querySelector('.p2');
p2.style.backgroundColor = 'orange';

const link = document.querySelector('section#a a');
link.setAttribute('href', 'https://github.com');
link.setAttribute('id', 'link-github');

const p3 = document.querySelector('.p3');
p3.classList.add('biru-muda'); 
