const btnNao = document.getElementById('nao');
const btnSim = document.getElementById('sim');
const container = document.querySelector('.container');

btnSim.addEventListener('click', () => {
  window.location.href = 'pagina2.html';
});

btnNao.addEventListener('click', () => {
  const maxX = container.clientWidth - btnNao.offsetWidth;
  const maxY = container.clientHeight - btnNao.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  btnNao.style.left = `${randomX}px`;
  btnNao.style.top = `${randomY}px`;
});
