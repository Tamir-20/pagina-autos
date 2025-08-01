// ============================
// MENÚ HAMBURGUESA
// ============================
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('header nav ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// ============================
// SLIDER DE IMÁGENES
// ============================

// Array con las imágenes del slider
const sliderImages = [
    'img/auto1.jpg',
    'img/auto2.jpg',
    'img/auto3.jpg'
];

let currentIndex = 0;
const hero = document.querySelector('.hero');

// Función para cambiar imagen
function changeSlide() {
    hero.style.background = `url('${sliderImages[currentIndex]}') center/cover no-repeat`;
}

// Botones prev y next (si los agregas)
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
        changeSlide();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % sliderImages.length;
        changeSlide();
    });
}

// Cambio automático cada 5 segundos
setInterval(() => {
    currentIndex = (currentIndex + 1) % sliderImages.length;
    changeSlide();
}, 5000);

//inicializar 
changeSlide();
