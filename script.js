const imagens = document.querySelectorAll('.carrossel-imagem');
const bolinhas = document.querySelectorAll('.bolinha');
let indiceAtual = 0;


function mudarImagem(indice) {
    const deslocamento = -indice * 100;
    document.querySelector('.carrossel-imagens').style.transform = `translateX(${deslocamento}%)`;

    bolinhas.forEach(bolinha => bolinha.classList.remove('ativa'));
    bolinhas[indice].classList.add('ativa');
}


bolinhas.forEach(bolinha => {
    bolinha.addEventListener('click', () => {
        const indice = parseInt(bolinha.getAttribute('data-index'));
        mudarImagem(indice);
    });
});


mudarImagem(indiceAtual);


let currentIndex = 0;

function startCarousel() {
    const carouselContainer = document.querySelector('.carrossel-imagens');
    const images = document.querySelectorAll('.carrossel-imagens img');

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        carouselContainer.style.transform = `translateX(-${currentIndex * 100 / images.length}%)`;
    }, 3000);
}


function displayGenre(genre) {
    const musicCards = document.getElementById('music-cards');
    musicCards.innerHTML = '';
    const songs = {
        rock: ['Bohemian Rhapsody', 'Stairway to Heaven', 'Hotel California'],
        pop: ['Bad Guy', 'Shape of You', 'Blinding Lights'],
        jazz: ['Take Five', 'So What', 'Feeling Good'],
        classical: ['Fur Elise', 'Moonlight Sonata', 'Canon in D']
    };

    if (songs[genre]) {
        songs[genre].forEach(song => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `<h3>${song}</h3><p>Genre: ${genre}</p>`;
            musicCards.appendChild(card);
        });
    }
}


document.addEventListener('DOMContentLoaded', startCarousel);