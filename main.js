let ul = document.querySelector('nav ul');

function openMenu(){
    ul.classList.add('open');
}

function closeMenu(){
    ul.classList.remove('open');
}

let historia = document.querySelector('.selecthistoria');

function irHistoria(){
    historia.classList('historia')
}