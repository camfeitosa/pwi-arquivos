const monica = document.querySelector('.monica');
const tubo = document.querySelector('.tubo');

const pular = () => {
    monica.classList.add('pular');

    setTimeout(() => 
    {
        monica.classList.remove('pular');
    }, 500);
} 
const loop = setInterval(() => {
    
    const posicaoCano = tubo.offsetLeft;
    const posicaomonica = +window.getComputedStyle(monica).bottom.replace('px', '');
    
    if (posicaoCano <= 120 && posicaoCano > 0 && posicaomonica < 70) {
        tubo.style.animation = 'none';
        tubo.style.left = `${posicaoCano}px`;

        monica.style.animation = 'none';
        monica.style.bottom = `${posicaomonica}px`;

        monica.src = './img/fim.png';
        clearInterval(loop);
    }
}, 10)

document.addEventListener('keydown', pular);

