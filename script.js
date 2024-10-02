// Mariana Matos 3D 18/09/2024
const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function() {
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const primeirosPassos = document.querySelectorAll('.passo');
    primeirosPassos.forEach(passo => passo.classList.remove('ativo'));
    document.getElementById('passo-1').classList.add('ativo'); 
});