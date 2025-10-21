const cards = document.querySelectorAll('.card');
const cards = document.querySelectorAll('.card');
const modal = document.getElementById('modal');
const modalText = document.getElementById('modalText');
const closeModal = document.getElementById('closeModal');

cards.forEach(card => {
  card.addEventListener('click', () => {
    // Pega o texto da parte de trás
    const back = card.querySelector('.back').innerHTML;
    // Coloca dentro da modal
    modalText.innerHTML = back;
    // Mostra a modal
    modal.style.display = 'block';
  });
});

// Fechar modal ao clicar no "x"
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Fechar modal ao clicar fora do conteúdo
window.addEventListener('click', (event) => {
  if(event.target === modal) {
    modal.style.display = 'none';
  }
});
