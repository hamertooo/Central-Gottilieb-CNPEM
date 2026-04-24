
// CARROSSEL


// Seleciona os elementos do carrossel
const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');

// Só executa se o carrossel existir na página (evita erro)
if (track && slides.length > 0) {

  let index = 0;

  // CONFIG
  const AUTO_PLAY_DELAY = 2100; // tempo entre slides (ms)
  let autoPlayInterval;

  // Atualiza a posição do carrossel
  function update() {
    track.style.transform = 'translateX(' + (-index * 100) + '%)';
  }

  // Vai para o próximo slide
  function nextSlide() {
    index = (index + 1) % slides.length;
    update();
  }

  // Vai para o slide anterior
  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    update();
  }

  // Inicia o autoplay
  function startAutoPlay() {
    stopAutoPlay(); // evita múltiplos intervalos
    autoPlayInterval = setInterval(nextSlide, AUTO_PLAY_DELAY);
  }

  // Para o autoplay
  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  // Botão próximo
  document.querySelector('.next')?.addEventListener('click', () => {
    nextSlide();
    startAutoPlay(); // reinicia autoplay
  });

  // Botão anterior
  document.querySelector('.prev')?.addEventListener('click', () => {
    prevSlide();
    startAutoPlay(); // reinicia autoplay
  });

  // Pausa ao passar o mouse (UX melhor)
  track.addEventListener('mouseenter', stopAutoPlay);
  track.addEventListener('mouseleave', startAutoPlay);

  // Inicia autoplay ao carregar
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