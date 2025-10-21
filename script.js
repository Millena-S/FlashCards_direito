const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const front = card.querySelector('.front');
    const back = card.querySelector('.back');

    // Alternar visibilidade
    if (front.style.display !== 'none') {
      front.style.display = 'none';
      back.style.display = 'block';
    } else {
      front.style.display = 'block';
      back.style.display = 'none';
    }
  });
});