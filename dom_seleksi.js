const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Samuel Belajar DOM';

const p = document.getElementsByTagName('p');
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
}

const p1 = document.getElementsByClassName('p1')[0]; 
p1.innerHTML = 'Ini diubah dari JS';

const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li = document.querySelectorAll('li');
li[0].style.backgroundColor = 'yellow';