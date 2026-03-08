const closeButtons = document.querySelectorAll('.close');

closeButtons.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        e.target.parentElement.style.display = 'none';
        e.preventDefault(); 
    });
});