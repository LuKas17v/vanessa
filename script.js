// Obtém os elementos da galeria e do botão
const gallery = document.getElementById('gallery');
const galleryButton = document.getElementById('galleryButton');
const closeGallery = document.querySelector('#gallery .close');

// Abre a galeria quando o botão é clicado
galleryButton.addEventListener('click', () => {
    gallery.style.display = 'block';
});

// Fecha a galeria quando o botão de fechar é clicado
closeGallery.addEventListener('click', () => {
    gallery.style.display = 'none';
});

// Fecha a galeria se o usuário clicar fora da imagem
window.addEventListener('click', (event) => {
    if (event.target === gallery) {
        gallery.style.display = 'none';
    }
});

// Obtém os elementos da seção pessoal e do botão
const personalSection = document.getElementById('personalSection');
const personalButton = document.getElementById('personalButton');
const closePersonal = document.querySelector('#personalSection .close');

// Abre a seção pessoal quando o botão é clicado
personalButton.addEventListener('click', () => {
    personalSection.style.display = 'block';
});

// Fecha a seção pessoal quando o botão de fechar é clicado
closePersonal.addEventListener('click', () => {
    personalSection.style.display = 'none';
});

// Fecha a seção pessoal se o usuário clicar fora da área
window.addEventListener('click', (event) => {
    if (event.target === personalSection) {
        personalSection.style.display = 'none';
    }
});
