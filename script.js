// Seleciona todos os cards
const cards = document.querySelectorAll('.card');

// Seleciona a modal e seus elementos internos
const modal = document.getElementById('modal');
const modalText = document.getElementById('modalText');
const closeModal = document.getElementById('closeModal');

// Para cada card, adiciona o evento de clique
cards.forEach(card => {
  card.addEventListener('click', () => {
    // Pega o conteúdo HTML da parte "back" do card
    const backContent = card.querySelector('.back').innerHTML;

    // Coloca o conteúdo dentro da modal
    modalText.innerHTML = backContent;

    // Exibe a modal
    modal.style.display = 'block';
  });
});

// Fecha a modal quando clica no "x"
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Fecha a modal ao clicar fora do conteúdo dela
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});