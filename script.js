// CARROSSEL

const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');

if (track && slides.length > 0) {
  let index = 0;

  const AUTO_PLAY_DELAY = 2100;
  let autoPlayInterval;

  function update() {
    track.style.transform = 'translateX(' + (-index * 100) + '%)';
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    update();
  }

  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    update();
  }

  function startAutoPlay() {
    stopAutoPlay();
    autoPlayInterval = setInterval(nextSlide, AUTO_PLAY_DELAY);
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  document.querySelector('.next')?.addEventListener('click', () => {
    nextSlide();
    startAutoPlay();
  });

  document.querySelector('.prev')?.addEventListener('click', () => {
    prevSlide();
    startAutoPlay();
  });

  track.addEventListener('mouseenter', stopAutoPlay);
  track.addEventListener('mouseleave', startAutoPlay);

  startAutoPlay();
}


// ANIMAÇÃO DE GRIFADO

document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll('.marcadoAzul');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  elementos.forEach(el => observer.observe(el));
});


// MENU HAMBURGER DOS CARDS

const btn = document.getElementById("toggleMenu");
const cardsLaterais = document.querySelector(".cards-laterais");
const containerDireita = document.querySelector(".container-direita");

if (btn && cardsLaterais && containerDireita) {
  btn.addEventListener("click", () => {
    cardsLaterais.classList.toggle("fechado");
    containerDireita.classList.toggle("aberto");
    btn.classList.toggle("ativo");
  });
}