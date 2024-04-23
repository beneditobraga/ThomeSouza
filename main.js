let ul = document.querySelector('nav ul');

function openMenu(){
    ul.classList.add('open');
}

function closeMenu(){
    ul.classList.remove('open');
}

const active = document.getElementById("active");
const unactive = document.getElementById("unactive");
const container = document.getElementById("container")

active.addEventListener("click", () => {
    container.classList.add("active");
})

unactive.addEventListener("click", () => {
    container.remove("active");
})


